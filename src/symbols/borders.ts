type ButtonRadiusKeys = "sharp" | "dull" | "round" | "circular";

export const radius: Readonly<{ [key in ButtonRadiusKeys]: number }> = {
  sharp: 0,
  dull: 8,
  round: 24,
  circular: 72
};
