import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { link, mobile } = theme;
  return {
    container: {
      display: "flex",
      alignItems: "center",
      [mobile]: {
        flexDirection: "column",
      },
      margin: "1rem 0 0 0",
    },
    paragraph: {
      display: "inline-block",
      margin: ".8rem 1.4rem 0 0",
      [mobile]: {
        marginBottom: "1.4rem",
      },
    },
    link,
  };
});
