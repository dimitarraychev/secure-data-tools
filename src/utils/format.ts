import type { FormatFn } from "../models/Formatter";

export const defaultFormatFn: FormatFn = (input, mode) => {
  try {
    if (!input.trim()) return "";

    if (mode === "parse") {
      const parsed = JSON.parse(input);
      return parsed; // maybe return as JS object? but for display, stringify it
    }

    if (mode === "stringify") {
      return JSON.stringify(JSON.parse(input));
    }

    if (mode === "stringify-pretty") {
      return JSON.stringify(JSON.parse(input), null, 2);
    }

    return input;
  } catch (err: any) {
    return `Error: ${err.message}`;
  }
};
