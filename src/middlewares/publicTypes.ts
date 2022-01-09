import { User } from "./../entity/user";
import { Request, Response } from "express";

export type MiddlewareTypeFunc = (
  req: Request,
  res: Response,
  next: (...args: unknown[]) => void
) => void;

declare module "express" {
  interface Request {
    user?: User;
  }
}
