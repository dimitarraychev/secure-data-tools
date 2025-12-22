import type { Encoding } from "../models/Convert";
import {
  decodeInput,
  encodeOutput,
  bytesToBase64,
  base64ToBytes,
} from "./encoding";

const wrapPem = (
  base64: string,
  type: "PUBLIC KEY" | "PRIVATE KEY"
): string => {
  const lines = base64.match(/.{1,64}/g) || [];
  return `-----BEGIN ${type}-----\n${lines.join("\n")}\n-----END ${type}-----`;
};

const unwrapPem = (pem: string): string =>
  pem.replace(/-----(BEGIN|END) [A-Z ]+-----/g, "").replace(/\s+/g, "");

export const generateKeyPair = async (hash: string = "SHA-256") => {
  const keys = await crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: hash },
    },
    true,
    ["encrypt", "decrypt"]
  );

  const pub = await crypto.subtle.exportKey("spki", keys.publicKey);
  const priv = await crypto.subtle.exportKey("pkcs8", keys.privateKey);

  const pubPem = wrapPem(bytesToBase64(pub), "PUBLIC KEY");
  const privPem = wrapPem(bytesToBase64(priv), "PRIVATE KEY");

  return { publicKeyPem: pubPem, privateKeyPem: privPem };
};

export const importPublicKey = async (
  pem: string,
  hash: string = "SHA-256"
) => {
  const der = base64ToBytes(unwrapPem(pem));
  return crypto.subtle.importKey(
    "spki",
    new Uint8Array(der).buffer,
    { name: "RSA-OAEP", hash: { name: hash } },
    true,
    ["encrypt"]
  );
};

export const importPrivateKey = async (
  pem: string,
  hash: string = "SHA-256"
) => {
  const der = base64ToBytes(unwrapPem(pem));
  return crypto.subtle.importKey(
    "pkcs8",
    new Uint8Array(der).buffer,
    { name: "RSA-OAEP", hash: { name: hash } },
    true,
    ["decrypt"]
  );
};

export const encryptWithPublicKey = async (
  publicKeyPem: string,
  data: string,
  encoding: Encoding = "utf8",
  hash: string = "SHA-256"
): Promise<string> => {
  const pubKey = await importPublicKey(publicKeyPem, hash);
  const dataBytes = decodeInput(data, encoding);

  const buf = new Uint8Array(dataBytes);

  const cipher = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, pubKey, buf);
  return bytesToBase64(cipher);
};

export const decryptWithPrivateKey = async (
  privateKeyPem: string,
  b64Cipher: string,
  encoding: Encoding = "utf8",
  hash: string = "SHA-256"
): Promise<string> => {
  const privKey = await importPrivateKey(privateKeyPem, hash);
  const cipher = new Uint8Array(base64ToBytes(b64Cipher));

  const plain = await crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privKey,
    cipher.buffer
  );

  return encodeOutput(plain, encoding);
};
