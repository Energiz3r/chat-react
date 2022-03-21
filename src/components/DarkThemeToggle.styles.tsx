import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { background, backgroundOpposite } = theme;
  return {
    button: {
      width: "4rem",
      height: "4rem",
      border: "none",
      borderRadius: "50%",
      position: "relative",
      backgroundColor: backgroundOpposite,
      cursor: "pointer",
    },
    icon: {
      position: "absolute",
      left: ".35rem",
      top: ".35rem",
      width: "3.3rem",
      stroke: background,
    },
  };
});
