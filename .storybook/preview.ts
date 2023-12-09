import "./styles.css";

import type { Preview } from "@storybook/react";

export default {
  parameters: {
    backgrounds: {
      default: "neutral-0",
      values: [
        {
          name: "neutral-0",
          value: "oklch(var(--color-neutral-0))",
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
} satisfies Preview;
