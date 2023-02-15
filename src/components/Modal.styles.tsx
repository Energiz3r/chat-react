import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { palette, themeStyle, desktop, mobile } = theme;
  const dark = themeStyle === "dark";
  return {
    modalOuter: {
      width: "100vw",
      position: "absolute",
      top: 0,
      left: 0,
      [mobile]: {
        minHeight: "100vh",
        overflowY: "auto",
      },
    },
    modalInner: {
      maxWidth: "100rem",
      padding: "1rem 2rem 2rem 2rem",
      [desktop]: {
        margin: "5% auto 0 auto",
      },
      [mobile]: {
        height: "100%",
        margin: 0,
      },
      backgroundColor: palette.baseShade,
      //borderRadius: ".5rem",
      borderTop: `.8rem solid ${
        dark ? palette.lighterShade : palette.darkerShade
      }`,
      boxShadow: dark ? "0 0 4rem .1rem rgb(29,29,29)" : 0, //".5rem 1.4rem 1.8rem .1rem rgb(89,89,89)",
      textAlign: "center",
    },
  };
});
