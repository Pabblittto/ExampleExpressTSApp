import { getData } from "./getData";
import { JWTAuthMiddleware } from "./../../middlewares/jwtAuthMiddleware";
import { Router } from "express";

export const userDataRouter = Router();

userDataRouter.use(JWTAuthMiddleware);

userDataRouter.get("/data", getData);
