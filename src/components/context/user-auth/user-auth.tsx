"use client";
import { generateUserJWT } from "@/utilities/jwt";
import { UserAuth } from "@/utilities/user_type";
import jwt from "jsonwebtoken";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const TOKEN_KEY_STORAGE = "token";

export type UserContextValue = {
  user: UserAuth | null;
  updateUser: (u: UserAuth) => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export const useUserContext = () => {
  return useContext(UserContext);
};

export function UserContextprovider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserAuth | null>(null);

  function updateUser(user: UserAuth) {
    const decodedUser = generateUserJWT(user);
    localStorage.setItem(TOKEN_KEY_STORAGE, decodedUser);
    setUser(() => user);
  }

  useEffect(() => {
    if (typeof localStorage == undefined) return;
    const token = localStorage.getItem(TOKEN_KEY_STORAGE);
    if (!token) return;
    const decodedToken = jwt.decode(token) as UserAuth & { iat: number };
    setUser(() => {
      return {
        created_at: decodedToken.created_at,
        first_name: decodedToken.first_name,
        last_name: decodedToken.last_name,
        id: decodedToken.id,
        role: decodedToken.role,
        save: true,
      };
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
