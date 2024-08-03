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
      default: "neutral",
      values: [
        {
          name: "neutral",
          value: "oklch(var(--color-neutral-50))",
        },
        {
          name: "accent",
          value: "oklch(var(--color-accent-100))",
        },
        {
          name: "info",
          value: "oklch(var(--color-info-100))",
        },
        {
          name: "danger",
          value: "oklch(var(--color-danger-100))",
        },
        {
          name: "success",
          value: "oklch(var(--color-success-100))",
        },
        {
          name: "warning",
          value: "oklch(var(--color-warning-100))",
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
