import { brighten } from "../utils/lighten";

export const link = (palette: any) => {
  return {
    link: {
      fontWeight: "bold",
      color: brighten(palette.themeColor, 30),
      "&:hover": {
        color: palette.themeColor,
      },
    },
  };
};
