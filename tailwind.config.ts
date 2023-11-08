import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* teal #0CA0A2
       * purple #8239F8
       * black #011627
       * text-1 #626E94
       * text-2 #7B7F8C
       * orange #FF9F1C
       * background #F5F8FC
       * hover-background purple/10
       * white
       * */
      colors: {
        "primary-teal": "#0CA0A2",
        "primary-purple": "#8239F8",
        "primary-black": "#011627",
        "primary-text1": "#626E94",
        "primary-text2": "#7B7F8C",
        "primary-orange": "#FF9F1C",
        "primary-gray": "#F5F8FC",
      },
      fontFamily: {
        sans: ["var(--font-peyda)"],
      },
      fontSize: {
        "heading-46": ["2.875rem", "2.875rem"],
        "heading-40": ["2.5rem", "2.5rem"],
        "heading-34": ["2.125rem", "2.125rem"],
        "heading-32": ["2rem", "2rem"],
        "heading-30": ["1.875rem", "1.875rem"],
        "heading-26": ["1.625rem", "1.625rem"],
        "heading-24": ["1.5rem", "1.5rem"],
        "heading-20": ["1.25rem", "1.25rem"],
        "heading-18": ["1.125rem", "1.125rem"],
        "p-base": ["1rem", "2rem"],
        "p-lg": ["1.125rem", "2.5rem"],
        "p-19": ["1.1875rem", "2.5625rem"],
      },
    },
  },
  plugins: [],
};
export default config;
