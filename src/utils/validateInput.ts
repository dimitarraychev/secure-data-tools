import type { Encoding } from "../models/Convert";

export const validateInput = (value: string, encoding: Encoding): boolean => {
  if (!encoding || encoding === "utf8") return true;

  if (encoding === "hex") {
    return /^[0-9a-fA-F]*$/.test(value);
  }

  if (encoding === "base64") {
    try {
      atob(value);
      return true;
    } catch {
      return false;
    }
  }

  return true;
};
