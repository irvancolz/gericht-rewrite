import { supabase } from "./supabase";
import { UpdateUserInput, User, UserInput } from "../user_type";

const USER_TABLE = "user";

export async function getUser(id: number) {
  let { data, error } = await supabase
    .from(USER_TABLE)
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(`failed to get users ${id} data :`, error.message);
    return;
  }

  return data as User;
}

export async function addUser(user: UserInput) {
  const { data: users, error } = await supabase
    .from(USER_TABLE)
    .insert([user])
    .select()
    .single();

  if (error) {
    console.log(`failed to add user to db: `, error.message);
    return;
  }
  return users as User;
}

export async function updateUser({
  first_name,
  last_name,
  id,
}: UpdateUserInput) {
  const { error } = await supabase
    .from(USER_TABLE)
    .update({ first_name, last_name })
    .eq("id", id);

  if (error) {
    console.log(`failed to update user data: `, error.message);
    return;
  }
  return error;
}
