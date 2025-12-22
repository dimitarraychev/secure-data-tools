import type { ConvertMode } from "../models/Convert";
import { decodeInput, encodeOutput } from "./encoding";

export const hexConverter = (input: string, mode: ConvertMode): string => {
  try {
    if (mode === "encode") {
      return encodeOutput(
        new Uint8Array(decodeInput(input, "utf8")).buffer,
        "hex"
      );
    }
    return encodeOutput(
      new Uint8Array(decodeInput(input, "hex")).buffer,
      "utf8"
    );
  } catch {
    throw new Error("Invalid hex string");
  }
};

export const base64Converter = (input: string, mode: ConvertMode): string => {
  try {
    if (mode === "encode") {
      return encodeOutput(
        new Uint8Array(decodeInput(input, "utf8")).buffer,
        "base64"
      );
    }
    return encodeOutput(
      new Uint8Array(decodeInput(input, "base64")).buffer,
      "utf8"
    );
  } catch {
    throw new Error("Invalid Base64 string");
  }
};

export const urlConverter = (input: string, mode: ConvertMode): string => {
  try {
    return mode === "encode"
      ? encodeURIComponent(input)
      : decodeURIComponent(input);
  } catch {
    throw new Error("Invalid URL encoded string");
  }
};
