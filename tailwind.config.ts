import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    animation: {
      'light-ray': 'light-ray 1.5s linear infinite',
    },
    keyframes: {
      'light-ray': {
        '0%': { transform: 'scaleY(0) translateY(0)', opacity: '1' },
        '50%': { opacity: '1' },
        '100%': { transform: 'scaleY(2) translateY(-100%)', opacity: '0' },
      },
    },
  },
  plugins: [],
};
export default config;
