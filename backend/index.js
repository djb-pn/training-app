export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // DYNAMIC CORS: Ensures communication works from your frontend
    const origin = request.headers.get("Origin") || "https://training.picksgallery.com";
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // --- 1. MAGIC LINK GENERATION ---
      if (url.pathname === "/auth/send-link" && request.method === "POST") {
        const { email } = await request.json();
        const token = crypto.randomUUID();
        const expires = new Date(Date.now() + 15 * 60000).toISOString();

        await env.DB.prepare("INSERT INTO auth_tokens (token, email, expires_at) VALUES (?, ?, ?)")
          .bind(token, email, expires).run();

        const magicLink = `https://training.picksgallery.com/login?token=${token}`;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { 
            "Authorization": `Bearer ${env.RESEND_API_KEY}`, 
            "Content-Type": "application/json" 
          },
          body: JSON.stringify({
            from: "Picks Gallery Auth <no-reply@auth.picksgallery.com>",
            to: email,
            subject: "Your Training Portal Login Link",
            html: `<p>Click <a href="${magicLink}">here</a> to log in. This link expires in 15 minutes.</p>`
          })
        });

        if (!res.ok) throw new Error("Email provider rejected the request.");
        return new Response(JSON.stringify({ sent: true }), { headers: corsHeaders });
      }

      // --- 2. VERIFY TOKEN ---
      if (url.pathname === "/auth/verify" && request.method === "GET") {
        const token = url.searchParams.get("token");
        const now = new Date().toISOString();

        const auth = await env.DB.prepare(
          "SELECT email FROM auth_tokens WHERE token = ? AND expires_at > ?"
        ).bind(token, now).first();

        if (!auth) return new Response(JSON.stringify({ error: "Invalid Link" }), { status: 401, headers: corsHeaders });

        await env.DB.prepare("DELETE FROM auth_tokens WHERE token = ?").bind(token).run();
        return new Response(JSON.stringify({ email: auth.email }), { headers: corsHeaders });
      }

      // --- 3. RECORD PROGRESS (Mastery) ---
      if (url.pathname === "/progress" && request.method === "POST") {
        const { userEmail, questionId, correct } = await request.json();
        await env.DB.prepare(
          "INSERT INTO progress (email, question_id, is_correct, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(email, question_id) DO UPDATE SET is_correct=excluded.is_correct, updated_at=excluded.updated_at"
        ).bind(userEmail, questionId, correct ? 1 : 0, new Date().toISOString()).run();
        
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // --- 4. REPORT ERROR ---
      if (url.pathname === "/report-question" && request.method === "POST") {
        const { userEmail, questionId, note, context } = await request.json();
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { 
            "Authorization": `Bearer ${env.RESEND_API_KEY}`, 
            "Content-Type": "application/json" 
          },
          body: JSON.stringify({
            from: "Training Monitor <flags@auth.picksgallery.com>",
            to: "darin@picksgallery.com",
            subject: `Question Flagged: ID ${questionId}`,
            text: `User: ${userEmail}\nQuestion ID: ${questionId}\nIssue: ${note}\n\nQuestion Text: ${context}`
          })
        });
        return new Response(JSON.stringify({ reported: true }), { headers: corsHeaders });
      }

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders });
  }
};