import { createUseStyles } from "react-jss";

const style = {
  height: "100%",
  margin: 0,
};

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { defaultAppSize, fontDefault, fontFamily, mSize, background } = theme;
  return {
    "@global": {
      html: {
        fontSize: defaultAppSize,
        overflow: "hidden",
        zoom: 1,
        backgroundColor: background,
        ...style,
      },
      body: {
        ...style,
        color: fontDefault,
        fontFamily: fontFamily,
        fontSize: mSize,
      },
      "#root": { ...style },
    },
  };
});
