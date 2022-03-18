import { useContext } from "react";
import { AppContext } from "../Context";
import { useStyles } from "./ChatApp.styles";
import { useTheme } from "react-jss";
import Welcome from "./Welcome";

const ChatApp = (): JSX.Element => {
  const theme: any = useTheme();
  const styles = useStyles({ theme });
  const { selectedTheme, setSelectedTheme } = useContext(AppContext);
  const updateTheme = () => {
    setSelectedTheme({ ...selectedTheme, style: "light" });
  };
  return (
    <>
      <Welcome />
    </>
  );
};

export default ChatApp;

// prettier-ignore
const brand = () => {
console.log("__________ .__                                   .__               __   ");
console.log("\\______   \\|  |  _____   ________  ____    ____  |  |__  _____   _/  |_ ");
console.log(" |    |  _/|  |  \\__  \\  \\___   /_/ <> \\ _/ ___\\ |  |  \\ \\__  \\  \\   __\\")
console.log(" |    |   \\|  |__ / <> \\_ /  __/ \\  ___/ \\  \\___ |   \\  \\ / <> \\_ |  |  ")
console.log(" |______  /|____/(____  //_____ \\ \\___  \\ \\___  ||___|__/(______/ |__|  ")
console.log("        \\/            \\/       \\/     \\/      \\/   (C) BlazeChat 2018")
console.log("")
}
brand();
