import { supabase } from "./supabase";
import { Comment, CommentInput } from "../blog_type";

export async function getComment(blog_id: number) {
  let { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("blog_id", blog_id)
    .is("parent_id", null)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(`failed to get comments on post ${blog_id}: `, error.message);
    return [];
  }

  return data as Comment[];
}

export async function getCommentCount(blog_id: number) {
  let { data, error } = await supabase
    .from("comments")
    .select("count")
    .eq("blog_id", blog_id)
    .single();

  if (error) {
    console.log(
      `failed to get comment total ${blog_id} replies: `,
      error.message
    );
    return;
  }

  return data;
}

export async function getCommentReplies(id: number) {
  let { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("parent_id", id);

  if (error) {
    console.log(`failed to get comment ${id} replies: `, error.message);
    return [];
  }

  return data as Comment[];
}

export async function createComment(comment: CommentInput) {
  let { data, error } = await supabase
    .from("comments")
    .insert([comment])
    .select()
    .single();
  if (error) {
    console.log(`failed to insert comment: `, error.message);
    return null;
  }
  return data as Comment;
}
