import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { modalInner, modalOuter, aLink, button } = theme;
  return {
    splashOuter: {
      ...modalOuter,
      marginLeft: "auto",
      marginRight: "auto",
    },
    splashInner: {
      ...modalInner,
      textAlign: "center",
    },
    appName: {
      ...aLink,
    },
    button: {
      ...button,
    },
  };
});
