import colors from "@evilmartians/harmony/base";

function oklchCoords(color: string) {
  return color.replace(/^oklch\((.+)\)$/u, "$1");
}

type ColorGroup =
  | "primary"
  | "neutral"
  | "info"
  | "danger"
  | "success"
  | "warning";
type ColorLevel = 0 | 1 | 2 | 3 | 4 | 5;

type ColorFamily<T extends ColorGroup> = Record<
  `--color-${T}-${ColorLevel}`,
  string
>;

interface Theme extends ColorFamily<ColorGroup> {}

const colorL0 = { light: 50, dark: 950 } as const;
const colorL1 = { light: 100, dark: 900 } as const;
const colorL2 = { light: 300, dark: 700 } as const;
const colorL3 = { light: 600, dark: 400 } as const;
const colorL4 = { light: 700, dark: 300 } as const;
const colorL5 = { light: 800, dark: 200 } as const;

export const lightTheme = {
  "--color-primary-0": oklchCoords(colors.indigo[colorL0.light]),
  "--color-primary-1": oklchCoords(colors.indigo[colorL1.light]),
  "--color-primary-2": oklchCoords(colors.indigo[colorL2.light]),
  "--color-primary-3": oklchCoords(colors.indigo[colorL3.light]),
  "--color-primary-4": oklchCoords(colors.indigo[colorL4.light]),
  "--color-primary-5": oklchCoords(colors.indigo[colorL5.light]),

  "--color-neutral-0": oklchCoords(colors.zinc[colorL0.light]),
  "--color-neutral-1": oklchCoords(colors.zinc[colorL1.light]),
  "--color-neutral-2": oklchCoords(colors.zinc[colorL2.light]),
  "--color-neutral-3": oklchCoords(colors.zinc[colorL3.light]),
  "--color-neutral-4": oklchCoords(colors.zinc[colorL4.light]),
  "--color-neutral-5": oklchCoords(colors.zinc[colorL5.light]),

  "--color-info-0": oklchCoords(colors.blue[colorL0.light]),
  "--color-info-1": oklchCoords(colors.blue[colorL1.light]),
  "--color-info-2": oklchCoords(colors.blue[colorL2.light]),
  "--color-info-3": oklchCoords(colors.blue[colorL3.light]),
  "--color-info-4": oklchCoords(colors.blue[colorL4.light]),
  "--color-info-5": oklchCoords(colors.blue[colorL5.light]),

  "--color-danger-0": oklchCoords(colors.red[colorL0.light]),
  "--color-danger-1": oklchCoords(colors.red[colorL1.light]),
  "--color-danger-2": oklchCoords(colors.red[colorL2.light]),
  "--color-danger-3": oklchCoords(colors.red[colorL3.light]),
  "--color-danger-4": oklchCoords(colors.red[colorL4.light]),
  "--color-danger-5": oklchCoords(colors.red[colorL5.light]),

  "--color-success-0": oklchCoords(colors.emerald[colorL0.light]),
  "--color-success-1": oklchCoords(colors.emerald[colorL1.light]),
  "--color-success-2": oklchCoords(colors.emerald[colorL2.light]),
  "--color-success-3": oklchCoords(colors.emerald[colorL3.light]),
  "--color-success-4": oklchCoords(colors.emerald[colorL4.light]),
  "--color-success-5": oklchCoords(colors.emerald[colorL5.light]),

  "--color-warning-0": oklchCoords(colors.yellow[colorL0.light]),
  "--color-warning-1": oklchCoords(colors.yellow[colorL1.light]),
  "--color-warning-2": oklchCoords(colors.yellow[colorL2.light]),
  "--color-warning-3": oklchCoords(colors.yellow[colorL3.light]),
  "--color-warning-4": oklchCoords(colors.yellow[colorL4.light]),
  "--color-warning-5": oklchCoords(colors.yellow[colorL5.light]),
} as const satisfies Theme;

export const darkTheme = {
  "--color-primary-0": oklchCoords(colors.indigo[colorL0.dark]),
  "--color-primary-1": oklchCoords(colors.indigo[colorL1.dark]),
  "--color-primary-2": oklchCoords(colors.indigo[colorL2.dark]),
  "--color-primary-3": oklchCoords(colors.indigo[colorL3.dark]),
  "--color-primary-4": oklchCoords(colors.indigo[colorL4.dark]),
  "--color-primary-5": oklchCoords(colors.indigo[colorL5.dark]),

  "--color-neutral-0": oklchCoords(colors.zinc[colorL0.dark]),
  "--color-neutral-1": oklchCoords(colors.zinc[colorL1.dark]),
  "--color-neutral-2": oklchCoords(colors.zinc[colorL2.dark]),
  "--color-neutral-3": oklchCoords(colors.zinc[colorL3.dark]),
  "--color-neutral-4": oklchCoords(colors.zinc[colorL4.dark]),
  "--color-neutral-5": oklchCoords(colors.zinc[colorL5.dark]),

  "--color-info-0": oklchCoords(colors.blue[colorL0.dark]),
  "--color-info-1": oklchCoords(colors.blue[colorL1.dark]),
  "--color-info-2": oklchCoords(colors.blue[colorL2.dark]),
  "--color-info-3": oklchCoords(colors.blue[colorL3.dark]),
  "--color-info-4": oklchCoords(colors.blue[colorL4.dark]),
  "--color-info-5": oklchCoords(colors.blue[colorL5.dark]),

  "--color-danger-0": oklchCoords(colors.red[colorL0.dark]),
  "--color-danger-1": oklchCoords(colors.red[colorL1.dark]),
  "--color-danger-2": oklchCoords(colors.red[colorL2.dark]),
  "--color-danger-3": oklchCoords(colors.red[colorL3.dark]),
  "--color-danger-4": oklchCoords(colors.red[colorL4.dark]),
  "--color-danger-5": oklchCoords(colors.red[colorL5.dark]),

  "--color-success-0": oklchCoords(colors.emerald[colorL0.dark]),
  "--color-success-1": oklchCoords(colors.emerald[colorL1.dark]),
  "--color-success-2": oklchCoords(colors.emerald[colorL2.dark]),
  "--color-success-3": oklchCoords(colors.emerald[colorL3.dark]),
  "--color-success-4": oklchCoords(colors.emerald[colorL4.dark]),
  "--color-success-5": oklchCoords(colors.emerald[colorL5.dark]),

  "--color-warning-0": oklchCoords(colors.yellow[colorL0.dark]),
  "--color-warning-1": oklchCoords(colors.yellow[colorL1.dark]),
  "--color-warning-2": oklchCoords(colors.yellow[colorL2.dark]),
  "--color-warning-3": oklchCoords(colors.yellow[colorL3.dark]),
  "--color-warning-4": oklchCoords(colors.yellow[colorL4.dark]),
  "--color-warning-5": oklchCoords(colors.yellow[colorL5.dark]),
} as const satisfies Theme;
