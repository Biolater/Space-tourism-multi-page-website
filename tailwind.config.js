/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#0B0D17",
          300: "#D0D6F9",
        },
      },
      fontFamily: {
        bellefair: ['"Bellefair"', "serif"],
        barlow: ['"Barlow Condensed"', "sans-serif"],
        barlowRegular: ['"Barlow"', "sans-serif"],
      },
      fontSize: {
        "preset-1": {
          fontFamily: "Bellefair Regular",
          fontSize: "144px",
          lineHeight: "1.719",
          letterSpacing: "0px",
        },
        "preset-2": {
          fontFamily: "Bellefair Regular",
          fontSize: "100px",
          lineHeight: "1.146",
          letterSpacing: "0px",
        },
        "preset-3": {
          fontFamily: "Bellefair Regular",
          fontSize: "56px",
          lineHeight: "1.642",
          letterSpacing: "0px",
        },
        "preset-4": {
          fontFamily: "Bellefair Regular",
          fontSize: "32px",
          lineHeight: "1.367",
          letterSpacing: "0px",
        },
        "preset-5": {
          fontFamily: "Barlow Condensed Regular",
          fontSize: "28px",
          lineHeight: "1.2",
          letterSpacing: "4px",
        },
        "preset-6": {
          fontFamily: "Bellefair Regular",
          fontSize: "28px",
          lineHeight: "1.321",
          letterSpacing: "0px",
        },
        "preset-7": {
          fontFamily: "Barlow Condensed Regular",
          fontSize: "14px",
          lineHeight: "1.168",
          letterSpacing: "2px",
        },
        "preset-8": {
          fontFamily: "Barlow Condensed Regular",
          fontSize: "16px",
          lineHeight: "1.192",
          letterSpacing: "2px",
        },
        "preset-9": {
          fontFamily: "Barlow Regular",
          fontSize: "18px",
          lineHeight: "1.8",
          letterSpacing: "0px",
        },
      },
      spacing: {
        1600: "128px",
        1200: "96px",
        1000: "80px",
        800: "64px",
        600: "48px",
        500: "40px",
        400: "32px",
        300: "24px",
        200: "16px",
        150: "12px",
        100: "8px",
        50: "4px",
        25: "2px",
      },
    },
  },
  plugins: [],
};
