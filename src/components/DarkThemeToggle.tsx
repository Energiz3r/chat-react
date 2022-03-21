import { useContext } from "react";
import { useStyles } from "./DarkThemeToggle.styles";
import { AppContext } from "../Context";
import { useTheme } from "react-jss";
import { ReactComponent as SunMoon } from "../svg/sunmoon.svg";

const DarkThemeToggle = (): JSX.Element => {
  const { selectedTheme, setSelectedTheme } = useContext(AppContext);
  const updateTheme = () => {
    setSelectedTheme({
      ...selectedTheme,
      style: selectedTheme.style === "dark" ? "light" : "dark",
    });
  };
  const theme: any = useTheme();
  const styles = useStyles({ theme });
  return (
    <button className={styles.button} onClick={updateTheme}>
      <SunMoon className={styles.icon} />
    </button>
  );
};

export default DarkThemeToggle;
