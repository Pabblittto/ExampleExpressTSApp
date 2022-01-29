import { User } from "./../entity/user";
import { decodeJWTFromHTTPHeader, TokenPayload } from "./../Utils/jsonWebToken";
import { MiddlewareTypeFunc } from "./publicTypes";
export const JWTAuthMiddleware: MiddlewareTypeFunc = async (req, res, next) => {
  try {
    let token =
      req.body.token || req.query.token || req.headers["authorization"];

    console.log(req.headers);

    if (token == undefined) {
      return res.status(403).send("A Token is required for authentication");
    }

    const userData = decodeJWTFromHTTPHeader<TokenPayload>(token);

    const user = await User.findOneOrFail({
      where: { id: userData.id },
      join: {
        alias: "user",
        leftJoinAndSelect: {
          group1: "user.managedGroups",
          group2: "user.groups",
        },
      },
    });

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
