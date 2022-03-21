export const textInput = (common: any) => {
  return {
    textInput: {
      //width: "32rem",
      height: "4rem",
      fontSize: "3rem",
      padding: "0 .5rem 0 .5rem",
      [common.mobile]: {
        width: "100%",
        padding: 0,
      },
      backgroundColor: common.borderColor,
      color: common.fontColorDefault,
      border: 0,
      textAlign: "center",
    },
  };
};
