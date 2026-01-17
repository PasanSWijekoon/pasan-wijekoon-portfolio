import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        nevera: ['var(--font-nevera)'],
      },
      colors: {
        background: "#050505",
      },
    },
  },
  plugins: [],
};
export default config;
