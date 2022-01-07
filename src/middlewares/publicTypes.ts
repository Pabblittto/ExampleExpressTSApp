import { Request, Response } from "express";

export type MiddlewareTypeFunc = (
  req: Request,
  res: Response,
  next: () => void
) => void;

declare module "express" {
  interface Request {
    user?: string; // TODO: change to user object saved in token
  }
}
