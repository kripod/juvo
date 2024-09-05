import colors from "@evilmartians/harmony/tailwind";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

import { darkTheme, lightTheme } from "./themes";

export default {
  theme: {
    colors,
    extend: {
      borderColor: ({ theme }) => ({
        DEFAULT: theme("colors.ui.neutral-200") as string,
      }),
      colors: {
        ui: Object.fromEntries(
          Object.entries(lightTheme).map(([key, value]) => [
            key.slice("--color-".length),
            `oklch(var(${key}, ${value}) / <alpha-value>)`,
          ]),
        ),
      },
      data: {
        invalid: 'invalid="true"',
      },
      transitionTimingFunction: {
        DEFAULT: defaultTheme.transitionTimingFunction.out,
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".theme-light": lightTheme,
        ".theme-dark": darkTheme,
      });
    }),
  ],
} satisfies Partial<Config>;
