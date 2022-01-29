import { generateCode } from "./generateCode";
import { createGroup } from "./createGroup";
import { JWTAuthMiddleware } from "./../../middlewares/jwtAuthMiddleware";
import { Router } from "express";

export const groupRouter = Router();

groupRouter.use(JWTAuthMiddleware);

groupRouter.post("/create", createGroup);
groupRouter.get("/generate-code/:groupId", generateCode);
groupRouter.post("/enroll", () => {}); //TODO
