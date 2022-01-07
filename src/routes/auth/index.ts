import { loginHandler } from "./login";
import { createUserHandler } from "./createUser";

import { Router } from "express";

export const authRouter = Router();

authRouter.post("/create", createUserHandler);
authRouter.post("/login", loginHandler);
