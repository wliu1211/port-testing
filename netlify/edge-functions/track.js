import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export default async (request, context) => {
  const url = new URL(request.url);
  const path = url.pathname;

  // Ignore static files (images, css, js, fonts, etc.)
  if (path.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|json|woff|woff2|ttf)$/)) {
    return context.next();
  }

  // 1. Connect to Supabase using Netlify's injected environment variables
  const supabase = createClient(
    Netlify.env.get("SUPABASE_URL"),
    Netlify.env.get("SUPABASE_PUBLISHABLE_DEFAULT_KEY") // Uses the secret admin key
  );

  // 2. Identify the visitor (Privacy-first hashing)
  const ip = context.ip || "127.0.0.1";
  const userAgent = request.headers.get("user-agent") || "";
  const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip + userAgent));
  const userHash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

  // 3. Save to DB (Fire and forget, don't wait/await so the site stays fast)
  console.log("📍 Tracking visit from:", context.geo?.city || "Unknown City", context.geo?.country?.name || "Unknown Country");
  
  supabase.from("page_views").insert({
    user_hash: userHash,
    path: new URL(request.url).pathname,
    city: context.geo?.city,
    country: context.geo?.country?.name
  }).then(({ error }) => {
    if (error) console.error("❌ Error logging to Supabase:", error);
    else console.log("✅ Logged to Supabase successfully");
  });

  return context.next(); // Continue to the website
};

export const config = { path: "/*" }; // Run on every page load