import { JWTAuthMiddleware } from "./../../middlewares/jwtAuthMiddleware";
import { Router } from "express";

export const userDataRouter = Router();

userDataRouter.use(JWTAuthMiddleware);
