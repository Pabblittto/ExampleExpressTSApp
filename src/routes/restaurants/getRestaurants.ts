import { RouteHandler } from "./../basicTypes";

export type GetRestaurantsReq = null;
export type GetRestaurantsRes = {};

export const getRestaurants: RouteHandler<
  GetRestaurantsReq,
  GetRestaurantsRes
> = async (req, res, next) => {
  try {
    // TODO:Get all restaurants from database
  } catch (err) {
    next(err);
  }
};
