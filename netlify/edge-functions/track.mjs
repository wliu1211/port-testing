import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export default async (request, context) => {
  const url = new URL(request.url);

  // 1. Skip static assets & internal React files
  if (url.pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|json|woff|woff2|ttf)$/) || 
      url.pathname.includes('/static/')) {
    return context.next();
  }

  try {
    // 2. Use Netlify.env.get directly (Deno's native way)
    const supabaseUrl = Netlify.env.get("SUPABASE_URL");
    const supabaseKey = Netlify.env.get("SUPABASE_PUBLISHABLE_DEFAULT_KEY");

    if (!supabaseUrl || !supabaseKey) {
      console.warn("⚠️ Supabase keys missing in environment variables.");
      return context.next();
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // 3. Identify the visitor (Privacy-first hashing)
    const ip = context.ip || "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "";
    const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip + userAgent));
    const userHash = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    // 4. Save to DB (Using .then() to avoid blocking the page load)
    console.log("📍 Tracking visit from:", context.geo?.city || "Unknown City");

    supabase.from("page_views").insert({
      user_hash: userHash,
      path: url.pathname,
      city: context.geo?.city || "Unknown",
      country: context.geo?.country?.name || "Unknown"
    }).then(({ error }) => {
      if (error) console.error("❌ Supabase Error:", error.message);
    });

  } catch (err) {
    console.error("❌ Edge Function Logic Error:", err);
  }

  return context.next();
};

export const config = { path: "/*" };