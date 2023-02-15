import { useState } from "react";
import { useStyles } from "./ChatApp.styles";
import { useTheme } from "react-jss";
import Animate from "../utils/Animate";
import DarkThemeToggle from "./DarkThemeToggle";
import Welcome from "./Welcome";
import Login from "./login/Login";

const ChatApp = (): JSX.Element => {
  const theme: any = useTheme();
  const styles = useStyles({ theme });

  const [showLogin, setShowLogin] = useState(false);

  const onWelcomeClose = () => {
    setShowLogin(true);
  };

  const oi = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <Animate>
        <Welcome onWelcomeClose={onWelcomeClose} />
      </Animate>
      <Animate visible={showLogin} direction="left">
        <Login />
      </Animate>
      <DarkThemeToggle />
    </>
  );
};

export default ChatApp;
