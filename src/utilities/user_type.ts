export type User = {
  id: number;
  first_name: string;
  last_name: string;
  created_at: string;
};

export type UserAuth = { role: "user" | "admin"; save: boolean } & User;

export type UserInput = Pick<User, "first_name" | "last_name">;
export type UpdateUserInput = Omit<User, "created_at">;
