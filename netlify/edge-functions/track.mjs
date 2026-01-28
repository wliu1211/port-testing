import { createClient } from "@supabase/supabase-js";

export default async (request, context) => {
  const url = new URL(request.url);

  // 1. Skip static assets & internal React files
  if (url.pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|json|woff|woff2|ttf)$/)) {
    return context.next();
  }

  try {
    // Universal Env Access
    const supabaseUrl = Netlify.env.get("SUPABASE_URL");
    const supabaseKey = Netlify.env.get("SUPABASE_PUBLISHABLE_DEFAULT_KEY");

    if (!supabaseUrl || !supabaseKey) return context.next();

    const supabase = createClient(supabaseUrl, supabaseKey);

    const ip = context.ip || "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "";
    const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip + userAgent));
    const userHash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

    // Fire and forget
    supabase.from("page_views").insert({
      user_hash: userHash,
      path: url.pathname,
      city: context.geo?.city || "Unknown",
      country: context.geo?.country?.name || "Unknown"
    }).then();

  } catch (err) {
    console.error("Tracking error:", err);
  }

  return context.next();
};

export const config = { path: "/*" };