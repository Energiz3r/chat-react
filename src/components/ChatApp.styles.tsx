import { createUseStyles } from "react-jss";

const docStyle = {
  height: "100%",
  margin: 0,
};

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const {
    defaultAppSize,
    fontDefault,
    fontFamily,
    mSize,
    background,
    backgroundOpposite,
  } = theme;
  return {
    button: {
      width: "4rem",
      height: "4rem",
      border: "none",
      borderRadius: "50%",
      position: "relative",
      backgroundColor: backgroundOpposite,
    },
    icon: {
      position: "absolute",
      left: ".35rem",
      top: ".35rem",
      width: "3.3rem",
      stroke: background,
    },
    "@global": {
      html: {
        fontSize: defaultAppSize,
        overflow: "hidden",
        zoom: 1,
        backgroundColor: background,
        ...docStyle,
      },
      body: {
        ...docStyle,
        color: fontDefault,
        fontFamily: fontFamily,
        fontSize: mSize,
      },
      "#root": {
        ...docStyle,
      },
    },
  };
});
