module.exports = {
  purge: {
    enabled: true,
    content: ["./app/**/*.html", "./app/assets/style/**/*.scss", "./app/**/*.ejs"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0",
      },
    },
    colors: {
      primary: "#630834",
      secondary: "#E31277",
      info: "#190014CC",
      warning: "#B75929",
      danger: "#AA0601",
      white: "#fff",
      dark: "#000000",
      "gray-100": "#F2F2F2",
      "gray-300": "#EFEFEF",
      "gray-400": "#CED4DA",
      "gray-600": "#707070",
      "gray-700": "#555555",
      "gray-900": "#495057",
      transparent: "transparent",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      notoSans: ["Noto Sans TC", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.5rem",
      "7xl": "3rem !important",
      "8xl": "3.5rem",
      "9xl": "4rem",
      "10xl": "4.5rem",
    },
    extend: {
      spacing: {
        11: "2.75rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        19: "4.75rem",
        21: "5.25rem",
        26: "6.5rem",
        30: "7.5rem",
        100: "25rem",
        120: "30rem",
        140: "35rem",
      },
      height: {
        "vh-full": "100vh",
      },
      minHeight: {
        "vh-3/4": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1320px",
          },
        },
      });
    },
  ],
};
