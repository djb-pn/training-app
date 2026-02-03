export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://training.picksgallery.com",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

    // --- MAGIC LINK GENERATION ---
    if (url.pathname === "/auth/send-link" && request.method === "POST") {
      const { email } = await request.json();
      const token = crypto.randomUUID();
      const expires = new Date(Date.now() + 15 * 60000).toISOString(); // 15 mins

      await env.DB.prepare("INSERT INTO auth_tokens (token, email, expires_at) VALUES (?, ?, ?)")
        .bind(token, email, expires).run();

      const magicLink = `https://training.picksgallery.com/login?token=${token}`;

      // Send via Resend
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Authorization": `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Picks Gallery Auth <no-reply@auth.picksgallery.com>",
          to: email,
          subject: "Your Training Portal Login Link",
          html: `<p>Click <a href="${magicLink}">here</a> to log in. This link expires in 15 minutes.</p>`
        })
      });

      return new Response(JSON.stringify({ sent: true }), { headers: corsHeaders });
    }

    // --- REPORT "BAD" QUESTIONS ---
    if (url.pathname === "/report-question" && request.method === "POST") {
      const { userEmail, questionId, note, context } = await request.json();

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Authorization": `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Training Monitor <flags@auth.picksgallery.com>",
          to: "darin@picksgallery.com",
          subject: `Question Review Needed: ${questionId}`,
          text: `User: ${userEmail}\nQuestion ID: ${questionId}\nNote: ${note}\nManual Excerpt: ${context}`
        })
      });

      return new Response(JSON.stringify({ reported: true }), { headers: corsHeaders });
    }

    return new Response("Not Found", { status: 404 });
  }
};