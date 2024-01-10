import { supabase } from "./supabase";
import { Comment } from "../blog_type";

export async function getComment(blog_id: number) {
  let { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("blog_id", blog_id)
    .is("parent_id", null);

  if (error) console.log(error.message);

  return data as Comment[];
}

export async function getCommentCount(blog_id: number) {
  let { data, error } = await supabase
    .from("comments")
    .select("count")
    .eq("blog_id", blog_id)
    .single();

  if (error) console.log(error.message);

  return data;
}

export async function getCommentReplies(id: number) {
  let { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("parent_id", id);

  if (error) {
    console.log(error.message);
    return [];
  }

  return data as Comment[];
}
