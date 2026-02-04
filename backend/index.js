export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // DYNAMIC CORS: Fixes the "Failed to Send" by allowing the frontend origin
    const origin = request.headers.get("Origin") || "https://training.picksgallery.com";
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // --- 1. MAGIC LINK GENERATION ---
    if (url.pathname === "/auth/send-link" && request.method === "POST") {
      try {
        const { email } = await request.json();
        const token = crypto.randomUUID();
        const expires = new Date(Date.now() + 15 * 60000).toISOString();

        // Save to D1 Database
        await env.DB.prepare("INSERT INTO auth_tokens (token, email, expires_at) VALUES (?, ?, ?)")
          .bind(token, email, expires).run();

        const magicLink = `https://training.picksgallery.com/login?token=${token}`;

        // SEND EMAIL VIA RESEND
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

        const resData = await res.json();
        
        if (!res.ok) {
          console.error("Resend rejection:", JSON.stringify(resData));
          return new Response(JSON.stringify({ error: "Resend failed", detail: resData }), { 
            status: res.status, 
            headers: corsHeaders 
          });
        }

        return new Response(JSON.stringify({ sent: true }), { headers: corsHeaders });

      } catch (err) {
        console.error("Worker Crash:", err.message);
        return new Response(JSON.stringify({ error: err.message }), { 
          status: 500, 
          headers: corsHeaders 
        });
      }
    }

    // --- 2. VERIFY TOKEN ---
    if (url.pathname === "/auth/verify" && request.method === "GET") {
      try {
        const token = url.searchParams.get("token");
        const now = new Date().toISOString();

        const auth = await env.DB.prepare(
          "SELECT email FROM auth_tokens WHERE token = ? AND expires_at > ?"
        ).bind(token, now).first();

        if (!auth) {
          return new Response(JSON.stringify({ error: "Invalid/Expired" }), { 
            status: 401, 
            headers: corsHeaders 
          });
        }

        // Clean up token after use
        await env.DB.prepare("DELETE FROM auth_tokens WHERE token = ?").bind(token).run();

        return new Response(JSON.stringify({ email: auth.email }), { headers: corsHeaders });
      } catch (err) {
        return new Response(JSON.stringify({ error: "DB Error" }), { 
          status: 500, 
          headers: corsHeaders 
        });
      }
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders });
  }
};