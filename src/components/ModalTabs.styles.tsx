import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { mobile } = theme;
  return {
    tabsContainer: {
      width: "100%",
      display: "flex",
      [mobile]: {
        flexDirection: "column",
      },
    },
  };
});

export const useStylesTab = createUseStyles<any, any>((theme: any) => {
  const { themeColor, lighten, borderColor, desktop, mobile } = theme;
  return {
    tab: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      height: "100%",
      width: "100%",
      backgroundColor: borderColor,
      cursor: "pointer",
      //maxWidth: "32rem",
      [desktop]: {
        margin: ".5rem",
      },
      [mobile]: {
        margin: ".5rem auto .5rem auto",
      },
    },
    label: {
      margin: "1rem 0 1rem 0", // sets the height of the tab button
    },
    tabSelected: {
      color: themeColor,
      backgroundColor: lighten(borderColor, 10),
    },
  };
});
