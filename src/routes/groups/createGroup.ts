import { Group } from "./../../entity/group";
import { RouteHandler } from "./../basicTypes";
export type CreateGroupReq = {
  groupName: string;
};

export type CreateGroupRes = Pick<Group, "id" | "name">;

export const createGroup: RouteHandler<CreateGroupReq, CreateGroupRes> = async (
  req,
  res,
  next
) => {
  try {
    const user = req.user;
    if (!user) {
      throw new Error("TODO: internal error");
    }
    const newGroup = new Group();
    newGroup.name = req.body.groupName;
    newGroup.admins = [user];
    const createdGroup = await newGroup.save();

    res.status(201).send({
      id: createdGroup.id,
      name: createdGroup.name,
    });
  } catch (err) {
    next(err);
  }
};
