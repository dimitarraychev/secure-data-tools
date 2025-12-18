export interface GeneratorSettings {
  count: number;
  length: number;
  excludeAmbiguous: boolean;
  passwords: string[];
}

export type GeneratorFn = (
  settings: Omit<GeneratorSettings, "passwords">
) => string[];
