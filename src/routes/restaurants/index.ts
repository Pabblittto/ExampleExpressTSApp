import { getRestaurants } from "./getRestaurants";
import { JWTAuthMiddleware } from "./../../middlewares/jwtAuthMiddleware";
import { app } from "./../../app";
import { Router } from "express";

export const restaurantRouter = Router();

restaurantRouter.use(JWTAuthMiddleware);

restaurantRouter.get("/list", getRestaurants);
