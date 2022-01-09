import { Request, Response } from "express";

export type RouteHandler<ReqB = unknown, ResB = unknown> = (
  req: Request<ReqB, any, ReqB>,
  res: Response<ResB>,
  next: (...args: unknown[]) => void
) => Promise<void>;
