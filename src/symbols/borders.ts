type ButtonRadiusKeys = "sharp" | "round";

const radius: Readonly<{ [key in ButtonRadiusKeys]: number }> = {
  sharp: 0,
  round: 72
};

type ButtonBorderKeys = "radius";

export const buttonBorders: Readonly<
  { [key in ButtonBorderKeys]: typeof radius }
> = {
  radius: radius
};
