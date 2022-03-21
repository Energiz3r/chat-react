import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { themeColor, width } = theme;
  return {
    container: {
      display: "block",
      position: "relative",
      paddingLeft: "3.5rem",
      marginBottom: "1.2rem",
      cursor: "pointer",
      fontSize: "2.2",
      height: `${width / 2}rem`,
      userSelect: "none",
      "& input": {
        position: "absolute",
        opacity: 0,
        cursor: "pointer",
        height: 0,
        width: 0,
        "&:checked": {
          "& ~ $checkmark": {
            backgroundColor: themeColor,
            "&:after": {
              display: "block",
            },
          },
        },
      },
      "& $checkmark": {
        "&:after": {
          // left: ".9rem",
          // top: ".5rem",
          //width: ".5rem",
          //height: "1rem",
          left: `${width / 3.5}rem`,
          top: `${width / 8}rem`,
          height: `${width / 2}rem`,
          width: `${width / 3}rem`,
          border: "solid white",
          borderWidth: "0 3px 3px 0",
          transform: "rotate(45deg)",
        },
      },
      "&:hover": {
        "& input": {
          "& ~ $checkmark": {
            backgroundColor: "#cccccc",
          },
        },
      },
    },
    checkmark: {
      position: "absolute",
      top: 0,
      left: 0,
      //height: "2.5rem",
      //width: "2.5rem",
      height: `${width}rem`,
      width: `${width}rem`,
      backgroundColor: "#eeeeee",
      "&:after": {
        content: '""',
        position: "absolute",
        display: "none",
      },
    },
  };
});
