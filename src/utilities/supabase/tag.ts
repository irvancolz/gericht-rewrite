import { supabase } from "./supabase";

export async function getBlogTag(blog_id: number) {
    let { data: tagsId, error } = await supabase
      .from("blog_tag")
      .select("tag_id")
      .eq("blog_id", blog_id);
  
    if (error) {
      console.log(error.message);
      return [];
    }
  
    let result: any[] = [];
    tagsId?.forEach(async ({ tag_id }) => {
      let { data: tags, error } = await supabase
        .from("tag")
        .select("*")
        .eq("id", tag_id)
        .single();
  
      if (error) {
        console.log(error.message);
        return;
      }
  
      result.push(tags);
    });
  
    return result;
  }