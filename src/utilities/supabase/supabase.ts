import { createClient } from "@supabase/supabase-js";
import { Blog, BlogDetail, Comment } from "../blog_type";
import { User } from "../user_type";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);
