import { app } from "./../../app";
import { Router } from "express";

export const authRouter = Router();

app.use("/auth", authRouter);
