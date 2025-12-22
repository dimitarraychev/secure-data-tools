export type ConvertMode = "encode" | "decode";

export interface ConvertSettingsModel {
  input: string;
  output: string;
  mode: ConvertMode;
}

export type ConvertFn = (input: string, mode: ConvertMode) => string;

export type Encoding = "utf8" | "hex" | "hex-lower" | "hex-upper" | "base64";
