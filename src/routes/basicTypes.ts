import { Request, Response } from "express";

interface ParamsDictionary {
  [key: string]: string;
}

export type RouteHandler<
  ReqBody = unknown,
  ResBody = unknown,
  ReqParams = ParamsDictionary
> = (
  req: Request<ReqParams, any, ReqBody>,
  res: Response<ResBody>,
  next: (...args: unknown[]) => void
) => Promise<void>;
