import { group } from "console";
import { RouteHandler } from "./../basicTypes";

export type SimplifiedGroup = {
  id: number;
  name: string;
  isAdmin: boolean;
};

export type GetDataReq = null;
export type GetDataRes = {
  groups: SimplifiedGroup[];
};

export const getData: RouteHandler<GetDataReq, GetDataRes> = async (
  req,
  res,
  next
) => {
  try {
    const user = req.user;
    if (!user) {
      throw new Error("TODO: internal error");
    }
    const groups: SimplifiedGroup[] = [];

    for (const gr of user.managedGroups) {
      groups.push({
        id: gr.id,
        name: gr.name,
        isAdmin: true,
      });
    }

    for (const gr of user.groups) {
      if (groups.some((g) => g.id == gr.id)) continue;

      groups.push({
        id: gr.id,
        name: gr.name,
        isAdmin: false,
      });
    }

    res.send({
      groups,
    });
  } catch (err) {
    next(err);
  }
};
