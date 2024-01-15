import { Tag } from "../blog_type";
import { supabase } from "./supabase";

export async function getBlogTag(blog_id: number) {
  let { data: tagsId, error } = await supabase
    .from("blog_tag")
    .select("tag_id")
    .eq("blog_id", blog_id);

  if (error) {
    console.log(`failed to get blogs ${blog_id} tag: `, error.message);
    return [];
  }

  let result: Tag[] = [];
  tagsId?.forEach(async ({ tag_id }) => {
    let { data: tags, error } = await supabase
      .from("tag")
      .select("*")
      .eq("id", tag_id)
      .single();

    if (error) {
      console.log(`failed to get ${tag_id} count: `, error.message);
      return;
    }

    result.push(tags);
  });

  return result;
}

export async function getTags() {
  let { data: tags, error } = await supabase.from("tag").select("*");

  if (error) {
    console.log(`failed to get tags: `, error.message);
    return [];
  }

  return tags as Tag[];
}
