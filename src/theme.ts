import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
  colors: {
    "p4g-yellow": [
      "#ffffe0",
      "#fffdcb",
      "#fefb9a",
      "#fef964",
      "#fdf737",
      "#fdf61f", // main
      "#fdf502",
      "#e1da00",
      "#c7c200",
      "#aba700",
    ],
    "p4g-purple": [
      "#f1eaff",
      "#dcd0ff",
      "#b69cfd",
      "#8e65fc",
      "#6c38fb",
      "#571cfb",
      "#4c0efc",
      "#3e03e1",
      "#3800d3", // main
      "#2b00b1",
    ],
    "p4g-blue": [
      "#e1f9ff",
      "#cbedff",
      "#9ad8ff",
      "#64c2ff",
      "#3aaffe",
      "#21a4fe",
      "#0098fb",
      "#008ae4",
      "#007acd",
      "#006ab6",
    ],
  },
  primaryColor: "p4g-yellow",
  fontFamily: "Fontsona",
});

export const vars = themeToVars(theme);
