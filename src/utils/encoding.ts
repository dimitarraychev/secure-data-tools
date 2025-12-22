import type { Encoding } from "../models/Convert";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export const utf8ToBytes = (value: string): Uint8Array => encoder.encode(value);

export const bytesToUtf8 = (bytes: ArrayBuffer): string =>
  decoder.decode(bytes);

export const bytesToBase64 = (buf: ArrayBuffer): string => {
  const bytes = new Uint8Array(buf);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
};

export const base64ToBytes = (b64: string): Uint8Array => {
  const binary = atob(b64);
  return new Uint8Array([...binary].map((c) => c.charCodeAt(0)));
};

export const bytesToHex = (buf: ArrayBuffer, upper = false): string => {
  const hex = [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return upper ? hex.toUpperCase() : hex;
};

export const hexToBytes = (hex: string): Uint8Array => {
  const cleaned = hex.replace(/\s+/g, "").replace(/^0x/, "");
  return new Uint8Array(
    cleaned.match(/.{1,2}/g)?.map((b) => parseInt(b, 16)) ?? []
  );
};

export const decodeInput = (
  value: string,
  encoding: Encoding = "utf8"
): Uint8Array => {
  switch (encoding) {
    case "base64":
      return base64ToBytes(value);
    case "hex":
    case "hex-lower":
    case "hex-upper":
      return hexToBytes(value);
    case "utf8":
    default:
      return utf8ToBytes(value);
  }
};

export const encodeOutput = (
  buf: ArrayBuffer,
  encoding: Encoding = "utf8"
): string => {
  switch (encoding) {
    case "base64":
      return bytesToBase64(buf);
    case "hex-upper":
      return bytesToHex(buf, true);
    case "hex":
    case "hex-lower":
      return bytesToHex(buf, false);
    case "utf8":
    default:
      return bytesToUtf8(buf);
  }
};

export const isValidEncoding = (value: string, encoding: Encoding): boolean => {
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
