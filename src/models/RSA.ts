import type { Encoding } from "./Convert";

export interface RSASettingsModel {
  input: string;
  output: string;
  inputEncoding: Encoding;
  outputEncoding: Encoding;
  publicKey: string;
  privateKey: string;
  algorithm: RSAAlgorithm;
  hash: RSAHash;
}

export type RSAAlgorithm = "RSA-OAEP";

export type RSAHash = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";
