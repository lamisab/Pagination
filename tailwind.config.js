/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue500: "#1F2937",
        lightGreeneColor: "#29BFA7",
        purpleColor: "#231A2A",
        darkColor: "#000000",
        lightGreyColor: "#999999",
        lightOrangeColor: "#F39471",
        neonGreenColor: "#75FB4C",
        lightGreenColor: "#00C853",
        primaryColor: "#EEE9E1",
        secondaryColor: "#272727",
        yellow: "#FCCC10",
        readColor: "#e22519",
        darkRedColor: "#D50000",
        whiteColor: "#ffffff",
        whiteGreyColor: "#F7F6F3",
        cardBgColor: "#f7f6f1",
        greyContainerColor: "#E0DBD5",
        yellowColor: "#E2B619",
        accentColor: "#001bff",
        blueColorA: "#072551",
        binkColorA: "#c20158",
        yellowColorA: "#efbf3f",
        redColorA: "#BD0034",
        cardBgColorA: "#d5d5d5",
        greyColorA: "#F4F4F6",
        greyMenuColor: "#F8FAFC",
        greyBorderBottom: "#EFF0F1",
        green300: "#6CCFBD",
        green400: "#BBE9E1",
        secondaryGreen400: "#50C5B1",
        textGrayColor: "#989DA3",
        hrColor: "#E3E3EA",
        gray700: "#374151",
        gray800: "#1F2937",
        gray900: "#111827",
        cyanblue: "#e0e1e4",
        footerBackground: "#F1F5F9",
        orange500: "#F18966",
        orange600: "#E69878",
        orange300: "#F6B098",
        orange400: "#F18966",
        slate100: "#F1F5F9",
        slate50: "#F8FAFC",
        backgroundWhite: "#FEFEFE",
        greige: "#C6BBAA",
        grayColor: "#C8C8C8",
        darkGrayColor: "#4D4C59",
        Neutralgray: "#e9eaed",
        Ngray: "#9D9FA70D",
        green500: "#00C853",
        green50: "#E6FAEE",
        red50: "#FBE6E6",
        red500: "#D50000",
        gray500: "#ccd0d2",
        neutralGre50: "#FAFAFB",
        greyChateau: "#989DA3",
        lightgray: "#B9B9B9",
        blue300: "#697079",
        neutralGrey: "#CCD0D2",
        error: "#D50000",
        lightGray100: "#989DA3",
        aliceBlue: "#f9fafc",
      },
      scale: {
        "-100": "-1",
      },

      textUnderlineOffset: {
        8: "25px",
      },
      screens: {
        mobile: { max: "767px" },
        tablet: { min: "768px", max: "1023px" },
        laptop: { min: "1024px", max: "1279px" },
        largeLaptop: { min: "1280px", max: "1535px" },
        desktop: { min: "1536px" },
      },
      fontFamily: {
        en: "'Helvetica'",
        title: "'Mada-Regular'",
        arabic_normal: "'ArabFont-normal'",
        DEFAULT: "'ArbFONTS-Regular'",
        ar: "'ArbFONTS-Bold'",
        access: "JF-Flat-regular",
        accessEng: "Metropolis-Regular",
      },
    },
  },
  plugins: [],
});