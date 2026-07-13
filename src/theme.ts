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
  },
  primaryColor: "p4g-yellow",
});

export const vars = themeToVars(theme);
