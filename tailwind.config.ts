import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import coloradix, { slate, blue, indigo } from "@coloradix/tailwindcss";

const radix = coloradix({
  slate,
  blue,
  indigo,
})
  .alias({
    neutral: "slate",
    primary: "indigo",
    secondary: "blue",
  })
  .build();

export default {
  content: ["./src/**/*.{ts,tsx,astro}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...radix.colors,
    },
    extend: {
      fontFamily: {
        sans: ["Inter"].concat(defaultTheme.fontFamily.sans),
        mono: ["Roboto Mono"].concat(defaultTheme.fontFamily.mono),
      },
    },
  },
  plugins: [radix.plugin],
} satisfies Config;
