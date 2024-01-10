import { supabase } from "./supabase";
import { User } from "../user_type";

export async function getUser(id: number) {
  let { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("id", id)
    .single();

  if (error) console.log(error.message);

  return data as User;
}
