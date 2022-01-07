import { MiddlewareTypeFunc } from "./publicTypes";
export const JWTAuthMiddleware: MiddlewareTypeFunc = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["Authorization"];

  if (token == undefined) {
    return res.status(403).send("A Token is required for authentication");
  }

  req.user = ""; // TODO: zapisać tu usera obiekt usera
};
