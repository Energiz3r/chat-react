import { ThemeOptions } from "./colours";

export const modal = (palette: any, options: ThemeOptions) => {
  return {
    modalWrapper: {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      zIndex: 15,
    },
    modalOuter: {
      width: "100vw",
      maxWidth: "100rem",
      display: "flex",
    },
    modalInner: {
      flexGrow: 1,
      margin: "5%",
      backgroundColor: palette.baseShade,
      borderRadius: ".5rem",
      boxShadow:
        options.style === "dark"
          ? "0 0 5rem .1rem rgb(29,29,29)"
          : "0 0 .8rem .1rem rgb(89,89,89)",
    },
  };
};
