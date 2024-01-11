import { supabase } from "./supabase";

export type Categories = {
  id: number;
  name: string;
  created_at: string;
  blog: { count: number }[];
};

export async function getAllCategories() {
  let { data: categories, error } = await supabase
    .from("categories")
    .select(
      `
    id,
    name,
    created_at,
    blog ( count )`
    )
    .order("id", { ascending: true });

  if (error) console.log(error.message);

  return categories as Categories[];
}
