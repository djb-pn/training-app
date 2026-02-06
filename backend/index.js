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

      // --- 3. RECORD PROGRESS ---
      // D1 Schema (verified via PRAGMA table_info):
      //   user_id TEXT (PK1), question_id TEXT (PK2), first_attempt_correct INTEGER,
      //   ease_factor REAL default 2.5, interval_days INTEGER default 0,
      //   next_review DATETIME, total_attempts INTEGER default 0
      //
      // On first insert: records first_attempt_correct and sets total_attempts = 1.
      // On conflict (retry): bumps total_attempts but NEVER overwrites first_attempt_correct.
      if (url.pathname === "/progress" && request.method === "POST") {
        const { userEmail, questionId, correct, isFirstAttempt } = await request.json();

        await env.DB.prepare(`
          INSERT INTO progress (user_id, question_id, first_attempt_correct, total_attempts)
          VALUES (?, ?, ?, 1)
          ON CONFLICT(user_id, question_id) DO UPDATE SET
            total_attempts = progress.total_attempts + 1
        `).bind(userEmail, questionId, correct ? 1 : 0).run();

        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // --- 4. GET PROGRESS ---
      // Returns all progress rows for a user so the frontend can compute per-module stats.
      if (url.pathname === "/progress" && request.method === "GET") {
        const email = url.searchParams.get("email");
        if (!email) {
          return new Response(JSON.stringify({ error: "email parameter required" }), { status: 400, headers: corsHeaders });
        }

        const { results } = await env.DB.prepare(
          "SELECT question_id, first_attempt_correct, total_attempts FROM progress WHERE user_id = ?"
        ).bind(email).all();

        return new Response(JSON.stringify({ progress: results || [] }), { headers: corsHeaders });
      }

      // --- 5. REPORT ERROR ---
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