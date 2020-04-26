type BorderRadiusKeys = "sharp" | "dull" | "round" | "circular";

export const radius: Readonly<{ [key in BorderRadiusKeys]: number }> = {
  sharp: 0,
  dull: 8,
  round: 24,
  circular: 72,
};

type LineThicknessKeys = "hairline" | "thin" | "medium" | "thick" | "oatmeal";

export const thickness: Readonly<{ [key in LineThicknessKeys]: number }> = {
  hairline: 1,
  thin: 2,
  medium: 5,
  thick: 8,
  oatmeal: 13,
};
