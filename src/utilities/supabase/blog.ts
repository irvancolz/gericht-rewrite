import { supabase } from "./supabase";
import { Blog, BlogDetail } from "../blog_type";

export async function getBlogRecord() {
  let { data, error } = await supabase.from("blog").select("*");

  if (error) console.log(error.message);
  return data as Blog[];
}

export async function getBlog(id: number) {
  let { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("id", id)
    .single();

  if (error) console.log("failed to get all blogs :", error.message);

  return data as BlogDetail;
}

export async function getLatestBlog() {
  let { data, error } = await supabase
    .from("blog")
    .select("*")
    .order("created_at", {
      nullsFirst: false,
      ascending: false,
    })
    .limit(1)
    .single();

  if (error) console.log("failed to get latest blog: ", error.message);

  return data as BlogDetail;
}
