export const decodeInput = (
  value: string,
  encoding: "" | "utf8" | "hex" | "base64"
): Uint8Array => {
  if (!encoding || encoding === "utf8") {
    return new TextEncoder().encode(value);
  }

  if (encoding === "hex") {
    const matches = value.match(/.{1,2}/g);
    if (!matches) return new Uint8Array();
    return new Uint8Array(matches.map((b) => parseInt(b, 16)));
  }

  if (encoding === "base64") {
    const binary = atob(value);
    return new Uint8Array([...binary].map((c) => c.charCodeAt(0)));
  }

  return new TextEncoder().encode(value);
};
