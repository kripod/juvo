import colors from "@evilmartians/harmony/base";

function oklchCoords(color: string) {
  return color.replace(/^oklch\((.+)\)$/u, "$1");
}

type ColorGroup =
  | "accent"
  | "neutral"
  | "info"
  | "danger"
  | "success"
  | "warning";

const colorWeights = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;
const invertedColorWeights = colorWeights.toReversed();
type ColorWeight = (typeof colorWeights)[number];

function invertWeight(weight: ColorWeight) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return invertedColorWeights[colorWeights.indexOf(weight)]!;
}

type ColorFamily<T extends ColorGroup> = Record<
  `--color-${T}-${ColorWeight}`,
  string
>;

function colorFamily<T extends ColorGroup>(
  group: T,
  palette: Record<ColorWeight, string>,
  { extractCoords = oklchCoords, invert = false } = {},
) {
  return Object.fromEntries(
    Object.keys(palette).map((key) => {
      const weight = Number(key) as ColorWeight;
      const color = palette[invert ? invertWeight(weight) : weight];
      return [`--color-${group}-${weight}`, extractCoords(color)];
    }),
  ) as ColorFamily<T>;
}

interface Theme extends ColorFamily<ColorGroup> {}

export const lightTheme = {
  ...colorFamily("accent", colors.indigo),
  ...colorFamily("neutral", colors.zinc),
  ...colorFamily("info", colors.blue),
  ...colorFamily("danger", colors.red),
  ...colorFamily("success", colors.emerald),
  ...colorFamily("warning", colors.yellow),
} as const satisfies Theme;

export const darkTheme = {
  ...colorFamily("accent", colors.indigo, { invert: true }),
  ...colorFamily("neutral", colors.zinc, { invert: true }),
  ...colorFamily("info", colors.blue, { invert: true }),
  ...colorFamily("danger", colors.red, { invert: true }),
  ...colorFamily("success", colors.emerald, { invert: true }),
  ...colorFamily("warning", colors.yellow, { invert: true }),
} as const satisfies Theme;
