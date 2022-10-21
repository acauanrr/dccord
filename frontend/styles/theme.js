import { extendTheme, textDecoration } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.600",
        lineHeight: "tall",
        background: "url('/images/bg-blue-blocks.jpg')",
      },
      a: {
        color: "teal.500",
      },
    },
  },
  fonts: {
    body: `'Noto Sans', sans-serif`,
    heading: `'Roboto Condensed', sans-serif`,
  },

  colors: {
    brand: {
      100: "#B6FFFA",
      200: "#89FFF7",
      300: "#53DCD2",
      400: "#03b5aa",
      500: "#4ea5d9",
      600: "#324a5e",
      700: "#122c34",
      800: "#051318",
      900: "#051318",
    },
  },
});

export default theme;
