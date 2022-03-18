import { brighten } from "../utils/lighten";

export const button = (palette: any) => {
  return {
    button: {
      cursor: "pointer",
      "&:disabled": {
        cursor: "default",
        opacity: ".5",
      },
      fontWeight: "bold",
      fontSize: "4rem",
      padding: "1.5rem",
      color: palette.brightShade,
      backgroundColor: palette.themeColor,
      border: 0,
      borderBottom: `.4rem solid ${brighten(palette.themeColor, -20)}`,
      margin: ".8rem",
    },
  };
};
