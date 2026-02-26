export const colors = {
  brand: {
    gold: {
      50: "#FFF9E6",
      100: "#FFF0BF",
      200: "#FFE699",
      300: "#FFDB66",
      400: "#FFD133",
      500: "#C8A951",
      600: "#B8963D",
      700: "#9A7B2F",
      800: "#7C6124",
      900: "#5E4919",
    },
    white: "#FFFFFF",
    cream: "#FAF8F5",
    dark: "#1A1A1A",
    text: {
      primary: "#1A1A1A",
      secondary: "#4A4A4A",
      muted: "#8A8A8A",
      light: "#FFFFFF",
    },
  },
} as const;

export const fontFamily = {
  sans: ["Inter", "system-ui", "sans-serif"],
  serif: ["Playfair Display", "Georgia", "serif"],
} as const;
