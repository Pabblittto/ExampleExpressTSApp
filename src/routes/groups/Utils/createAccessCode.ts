import { NumberLiteralType } from "typescript";
import random from "randomstring";
export type CreateAccessCodeRes = {
  timestamp: number;
  code: string;
};

export const createAccessCode = (): CreateAccessCodeRes => {
  const code = random.generate({
    length: 5,
    charset: "alphanumeric",
    capitalization: "uppercase",
  });

  return {
    timestamp: Date.now(),
    code,
  };
};
