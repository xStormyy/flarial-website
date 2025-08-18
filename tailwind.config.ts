import type { Config } from "tailwindcss";
import { colors, spacing, typography } from "./src/theme/tokens";
import aspectRatio from "@tailwindcss/aspect-ratio";
import typographyPlugin from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily: {
        primary: typography.fonts.primary,
        system: typography.fonts.system,
      },
      fontSize: typography.sizes,
      lineHeight: typography.lineHeights,
      fontWeight: typography.weights,
    },
  },
  plugins: [
    aspectRatio,
    typographyPlugin,
  ],
} satisfies Config;
