import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-blue": "linear-gradient(119deg, #C29AFF 6.42%, #4062FF 89.8%)",
        "gradient-blue-white": "linear-gradient(180deg, rgba(98,117,249,1) 6.42%, rgba(255,255,255,1) 100%);",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-grey": "linear-gradient(180deg, rgba(245,247,250,1) 6.42%, rgba(229,233,249,1) 37%, rgba(237,240,250,1) 90%)",
        "gradient-pink-blue" : "linear-gradient(145deg, rgba(117,87,227,1) 6.42%, rgba(161,108,174,1) 52%, rgba(240,139,96,1) 90%);",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      colors: {
        blue: "#5170ff",
        "light-blue": "#d6ddff",
        "light-purple": "#B495FFCC",
        primary: "#302d43",
        secondary: "#302D4399",
      },
      fontFamily: {
        Graphik: 'Graphik',
      }
    },
  },
};
export default config;
