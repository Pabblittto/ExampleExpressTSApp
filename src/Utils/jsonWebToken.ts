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

/**
 * Decodes JWT and returns it's payload. If token argument contains some additional strings like 'Bearier', it will be trimmed from the text.
 * @param token
 */
export const decodeJWTFromHTTPHeader = <Payload extends unknown>(
  token: string
): Payload => {
  const tokenParts = token.split(" ");

  const extractedToken = tokenParts[tokenParts.length - 1];

  const decodedToken = jwt.decode(extractedToken);

  return decodedToken as Payload;
};
