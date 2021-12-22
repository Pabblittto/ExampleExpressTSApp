import { app } from "./../../app";
import { Router } from "express";

export const restaurantRouter = Router();

app.use("/restaurants", restaurantRouter);
