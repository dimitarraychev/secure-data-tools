import type { Encoding } from "./Convert";

export interface RSASettingsModel {
  input: string;
  output: string;
  inputEncoding: Encoding;
  outputEncoding: Encoding;
  publicKey: string;
  privateKey: string;
  algorithm: RSAAlgorithm;
}

export type RSAAlgorithm =
  | "PCKS#1"
  | "SHA-1"
  | "SHA-224"
  | "SHA-256"
  | "SHA-384"
  | "SHA-512";
