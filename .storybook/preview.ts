import "./styles.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react";

export default {
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "theme-light",
        dark: "theme-dark",
      },
      defaultTheme: "light",
    }),
  ],
  parameters: {
    backgrounds: {
      default: "neutral-0",
      values: [
        {
          name: "neutral-0",
          value: "oklch(var(--color-neutral-50))",
        },
        {
          name: "neutral-1",
          value: "oklch(var(--color-neutral-100))",
        },
      ],
      grid: {
        cellSize: 8,
        cellAmount: 4,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/iu,
        date: /date$/iu,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Preview;
