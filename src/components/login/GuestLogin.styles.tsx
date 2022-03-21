import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { button, mobile, textInput } = theme;

  return {
    container: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    form: {
      marginTop: "2rem",
      display: "flex",
      flexDirection: "column",
      [mobile]: {
        width: "100%",
      },
    },
    input: {
      ...textInput,
      width: "32rem",
      height: "8rem",
      fontSize: "4rem",
      [mobile]: {
        ...textInput[mobile],
        fontSize: "3rem",
        height: "6rem",
      },
    },
    button: {
      ...button,
      marginLeft: 0,
      marginRight: 0,
    },
  };
});
