import { RouteHandler } from "./../basicTypes";
import { createToken } from "./../../Utils/createToken";
import { UserRepository } from "./../../data/UserRepository/userRepository";
import { DatabaseConnection } from "./../../data/connection";

import bcrypt from "bcrypt";
import { User } from "../../entity/user";

export type RegisterUserRes = { token: string };
export type RegisterUserReq = { email: string; password: string };

/**
 * Creates account for given email and password
 */
export const createUserHandler: RouteHandler<
  RegisterUserReq,
  RegisterUserRes
> = async (req, res, next) => {
  //TODO: need to place try catch statement around
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const emailUsed = await (await DatabaseConnection.getConnection())
      .getCustomRepository(UserRepository)
      .isEmailUsed(email);

    if (emailUsed) throw new Error("TODO need to add custom error object");

    //Create user
    const user = new User();
    user.email = email;
    user.hashedPassword = hashedPassword;

    const createdUser = await user.save();

    res.send({ token: createToken(createdUser) });
  } catch (err) {
    next(err);
  }
};
