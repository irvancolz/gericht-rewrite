import { supabase } from "./supabase";

export function getSupabasePublicUrl(path: string) {
  if (!path) return "";
  const {
    data: { publicUrl },
  } = supabase.storage.from("gericht-assets").getPublicUrl(path);
  return publicUrl;
}
