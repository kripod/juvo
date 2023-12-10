import type { Config } from "tailwindcss";

import tailwindPreset from "./src/tailwind-preset";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [tailwindPreset],
} satisfies Config;
