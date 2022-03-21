import { useStyles } from "./Welcome.styles";
import { useTheme } from "react-jss";
import Modal from "./Modal";

interface Props {
  toggleVisibility?: () => void;
}

const Welcome = ({ toggleVisibility }: Props): JSX.Element => {
  const theme = useTheme();
  const styles = useStyles({ theme });
  return (
    <Modal>
      <h1>
        Welcome to <span className={styles.appName}>blazechat</span>
      </h1>
      <h3>a free chatroom</h3>
      <p>
        blazechat is a free-to-use chat program offering a range of 'rooms' for
        various topics, as well as the ability for users to create and register
        their own permanent chat rooms and host private chats with friends
      </p>
      <button className={styles.button} onClick={toggleVisibility}>
        PROCEED
      </button>
    </Modal>
  );
};

export default Welcome;
