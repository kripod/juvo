import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: ["../src/"],
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: true,
    },
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
} satisfies StorybookConfig;
