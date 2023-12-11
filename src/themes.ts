import colors from "@evilmartians/harmony/base";

function oklchCoords(color: string) {
  return color.replace(/^oklch\((.+)\)$/u, "$1");
}

type ColorGroup = "primary" | "neutral";
type ColorLevel = 0 | 1 | 2 | 3 | 4 | 5;

type ColorFamily<T extends ColorGroup> = {
  [P in `--color-${T}-${ColorLevel}`]: string;
};

interface Theme extends ColorFamily<ColorGroup> {}

const colorL0 = { light: 50, dark: 950 } as const;
const colorL1 = { light: 100, dark: 900 } as const;
const colorL2 = { light: 300, dark: 700 } as const;
const colorL3 = { light: 600, dark: 400 } as const;
const colorL4 = { light: 700, dark: 300 } as const;
const colorL5 = { light: 800, dark: 200 } as const;

export const lightTheme = {
  "--color-primary-0": oklchCoords(colors.blue[colorL0.light]),
  "--color-primary-1": oklchCoords(colors.blue[colorL1.light]),
  "--color-primary-2": oklchCoords(colors.blue[colorL2.light]),
  "--color-primary-3": oklchCoords(colors.blue[colorL3.light]),
  "--color-primary-4": oklchCoords(colors.blue[colorL4.light]),
  "--color-primary-5": oklchCoords(colors.blue[colorL5.light]),

  "--color-neutral-0": oklchCoords(colors.zinc[colorL0.light]),
  "--color-neutral-1": oklchCoords(colors.zinc[colorL1.light]),
  "--color-neutral-2": oklchCoords(colors.zinc[colorL2.light]),
  "--color-neutral-3": oklchCoords(colors.zinc[colorL3.light]),
  "--color-neutral-4": oklchCoords(colors.zinc[colorL4.light]),
  "--color-neutral-5": oklchCoords(colors.zinc[colorL5.light]),
} as const satisfies Theme;

export const darkTheme = {
  "--color-primary-0": oklchCoords(colors.blue[colorL0.dark]),
  "--color-primary-1": oklchCoords(colors.blue[colorL1.dark]),
  "--color-primary-2": oklchCoords(colors.blue[colorL2.dark]),
  "--color-primary-3": oklchCoords(colors.blue[colorL3.dark]),
  "--color-primary-4": oklchCoords(colors.blue[colorL4.dark]),
  "--color-primary-5": oklchCoords(colors.blue[colorL5.dark]),

  "--color-neutral-0": oklchCoords(colors.zinc[colorL0.dark]),
  "--color-neutral-1": oklchCoords(colors.zinc[colorL1.dark]),
  "--color-neutral-2": oklchCoords(colors.zinc[colorL2.dark]),
  "--color-neutral-3": oklchCoords(colors.zinc[colorL3.dark]),
  "--color-neutral-4": oklchCoords(colors.zinc[colorL4.dark]),
  "--color-neutral-5": oklchCoords(colors.zinc[colorL5.dark]),
} as const satisfies Theme;
