# Secure Data Tools

A modern web app for **hashing, encoding/decoding, formatting, and cryptography** tasks. Built with **React TS + Vite**, featuring a clean UI and multiple utility tools.

## Features

### Hashing

- Generate hashes using **SHA-1, SHA-256, SHA-384, SHA-512**.
- Optional **HMAC** support for keyed hashing.
- Supports different input/output encodings (UTF-8, Base64, Hex).

### Encoding/Decoding

- Convert between **UTF-8, Hex (lowercase/uppercase), Base64, and URL encoding**.
- Instant conversion with error validation for invalid input.

### Formatting

- **Pretty-print JSON** or other text-based content.
- Clean formatting with indentation for readability.

### RSA Cryptography

- Generate **RSA key pairs** in **PKCS#1** and **OAEP** formats.
- Encrypt and decrypt using **public/private keys**.
- Supports different input/output encodings (UTF-8, Base64, Hex).

---

## Quick Reference Table

| Tool           | Options / Modes                                          |
| -------------- | -------------------------------------------------------- |
| Hashing        | SHA-1, SHA-256, SHA-384, SHA-512                         |
| Encoding       | Encode / Decode                                          |
| Encoding Types | UTF-8, Hex (lower/upper), Base64, URL                    |
| RSA            | PKCS#1, OAEP (SHA-1, SHA-224, SHA-256, SHA-384, SHA-512) |
| Formatting     | JSON                                                     |

---

## Technologies

- **Frontend**: React, TypeScript, Vite
- **Crypto**: Web Crypto API (RSA, SHA), node-forge
- **Styling**: CSS

---

## License

MIT License
