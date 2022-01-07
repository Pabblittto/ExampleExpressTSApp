import { User } from "../entity/user";
import jwt from "jsonwebtoken";
require("dotenv").config();

export type TokenPayload = {
  id: number;
  email: string;
};

/**
 * Creates JWT for specific user
 * @param user User that token will be assigned to
 */
export const createToken = (user: User): string => {
  const payload: TokenPayload = {
    id: user.id,
    email: user.email,
  };

  //@ts-expect-error
  return jwt.sign(payload, process.env.SECRET_KEY);
};
