import { createStitches } from "@stitches/react";

export const { styled, css, createTheme, keyframes, globalCss, getCssText } =
  createStitches({
    utils: {
      gridCenter: () => ({
        display: "grid",
        placeContent: "center",
      }),
    },
  });
