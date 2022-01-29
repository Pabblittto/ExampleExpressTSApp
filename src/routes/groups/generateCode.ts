import { Group } from "./../../entity/group";
import { createAccessCode } from "./Utils/createAccessCode";
import { RouteHandler } from "./../basicTypes";
export type GenerateCodeReq = null;
export type GenerateCodeReqUrlParams = { groupId: string };
export type GenerateCodeRes = { code: string };

export const generateCode: RouteHandler<
  GenerateCodeReq,
  GenerateCodeRes,
  GenerateCodeReqUrlParams
> = async (req, res, next) => {
  try {
    const groupID = req.params.groupId;
    const groupIDNumb = Number.parseInt(groupID);
    const user = req.user;
    if (!user) {
      throw new Error("TODO: internal error");
    }

    const managedGroups = user.managedGroups;

    const isAdmin = !!managedGroups.find((g) => g.id === groupIDNumb);

    if (!isAdmin) {
      // If user that requested for a code is not an admin throw an error
      throw new Error("Unauthorized");
    }

    const group = await Group.findOneOrFail(groupIDNumb);

    const generatedAccessCode = createAccessCode();

    group.accessCode = generatedAccessCode.code;
    group.codeCreationTime = generatedAccessCode.timestamp;

    await group.save();

    res.status(201).send({
      code: generatedAccessCode.code,
    });
  } catch (err) {
    next(err);
  }
};
