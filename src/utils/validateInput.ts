export const validateInput = (
  value: string,
  encoding: "" | "utf8" | "hex" | "base64"
): boolean => {
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
