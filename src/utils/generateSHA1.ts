export const generateSHA1 = async (
  payload: string,
  key?: string
): Promise<Uint8Array> => {
  const enc = new TextEncoder();
  const data = enc.encode(payload);

  let buffer: ArrayBuffer;

  if (key) {
    const keyData = enc.encode(key);
    const cryptoKey = await window.crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: { name: "SHA-1" } },
      false,
      ["sign"]
    );

    buffer = await window.crypto.subtle.sign("HMAC", cryptoKey, data);
  } else {
    buffer = await window.crypto.subtle.digest("SHA-1", data);
  }

  return new Uint8Array(buffer);
};
