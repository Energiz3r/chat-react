import { useEffect } from "react";
import { useStyles } from "./ChatApp.styles";
import { useTheme } from "react-jss";
import Animate from "../utils/Animate";
import DarkThemeToggle from "./DarkThemeToggle";
import Welcome from "./Welcome";
import Login from "./login/Login";

const ChatApp = (): JSX.Element => {
  const theme: any = useTheme();
  const styles = useStyles({ theme });

  return (
    <>
      <Animate visible="initialOff" direction="up">
        <Welcome />
      </Animate>
      <Animate visible="initialOn" direction="up">
        <Login />
      </Animate>
      <DarkThemeToggle />
    </>
  );
};

export default ChatApp;
