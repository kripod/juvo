import type { StorybookConfig } from "@storybook/react-vite";

export default {
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: true,
    },
  },
  stories: ["../src/"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-themes",
  ],
} satisfies StorybookConfig;
