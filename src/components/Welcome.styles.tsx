import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { link, button } = theme;
  return {
    appName: {
      ...link,
    },
    button: {
      ...button,
    },
  };
});
