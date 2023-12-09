import colors from "@evilmartians/harmony/base";

function oklchCoords(color: string) {
  return color.replace(/^oklch\((.+)\)$/u, "$1");
}

interface Theme {
  "--color-neutral-0": string;
  "--color-neutral-1": string;
  "--color-neutral-2": string;
  "--color-neutral-5": string;
  "--color-primary-3": string;
  "--color-primary-4": string;
  "--color-primary-5": string;
}

export const lightTheme = {
  "--color-neutral-0": oklchCoords(colors.zinc[50]),
  "--color-neutral-1": oklchCoords(colors.zinc[100]),
  "--color-neutral-2": oklchCoords(colors.zinc[300]),
  "--color-neutral-5": oklchCoords(colors.zinc[800]),
  "--color-primary-3": oklchCoords(colors.blue[600]),
  "--color-primary-4": oklchCoords(colors.blue[700]),
  "--color-primary-5": oklchCoords(colors.blue[800]),
} as const satisfies Theme;

export const darkTheme = {
  "--color-neutral-0": oklchCoords(colors.zinc[950]),
  "--color-neutral-1": oklchCoords(colors.zinc[900]),
  "--color-neutral-2": oklchCoords(colors.zinc[700]),
  "--color-neutral-5": oklchCoords(colors.zinc[200]),
  "--color-primary-3": oklchCoords(colors.blue[400]),
  "--color-primary-4": oklchCoords(colors.blue[300]),
  "--color-primary-5": oklchCoords(colors.blue[200]),
} as const satisfies Theme;
