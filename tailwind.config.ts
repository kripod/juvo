import type { Config } from "tailwindcss";

import tailwindPreset from "./src/tailwind-preset";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  presets: [tailwindPreset],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },
  darkMode: ["class", ".theme-dark"],
} satisfies Config;
