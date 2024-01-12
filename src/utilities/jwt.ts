import jwt from "jsonwebtoken";
import { UserAuth } from "./user_type";

export function generateUserJWT(payload: UserAuth) {
  const token = jwt.sign(
    payload,
    process.env.NEXT_PUBLIC_SECRET_JWT_KEY || "SECRET"
  );
  return token;
}
