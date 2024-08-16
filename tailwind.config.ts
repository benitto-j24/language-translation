import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      dm_sans: ["DM Sans", "sans - serif"],
      plus_Jakarta: ["Plus Jakarta Sans", "sans - serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
