export const generateSHA256 = async (
  payload: Uint8Array,
  key?: Uint8Array
): Promise<Uint8Array> => {
  if (key) {
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      new Uint8Array(key).buffer,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const signature = await crypto.subtle.sign(
      "HMAC",
      cryptoKey,
      new Uint8Array(payload).buffer
    );
    return new Uint8Array(signature);
  }

  const digest = await crypto.subtle.digest(
    "SHA-256",
    new Uint8Array(payload).buffer
  );
  return new Uint8Array(digest);
};
