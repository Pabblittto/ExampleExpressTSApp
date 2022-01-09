import bcrypt from "bcrypt";
import { createToken } from "../../Utils/jsonWebToken";
import { User } from "./../../entity/user";
import { RouteHandler } from "./../basicTypes";

export type LoginUserRes = { token: string };
export type LoginUserReq = { email: string; password: string };

export const loginHandler: RouteHandler<LoginUserReq, LoginUserRes> = async (
  req,
  res,
  next
) => {
  try {
    const user = await User.findOne();

    if (!user) throw new Error("TODO/ unauthorized error");

    const { password } = req.body;

    if (bcrypt.compareSync(password, user.hashedPassword)) {
      res.send({ token: createToken(user) });
    } else {
      throw new Error("TODO: Unauthorized error");
    }
  } catch (err) {
    next(err);
  }
};
