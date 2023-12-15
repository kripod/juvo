import type { Config } from "tailwindcss";

import tailwindPreset from "./src/tailwind-preset";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  presets: [tailwindPreset],
  darkMode: ["class", ".theme-dark"],
} satisfies Config;
