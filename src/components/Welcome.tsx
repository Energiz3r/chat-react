import { useStyles } from "./Welcome.styles";
import { useTheme } from "react-jss";

const Welcome = (): JSX.Element => {
  const theme: any = useTheme();
  const styles = useStyles({ theme });
  return (
    <div className={styles.splashOuter}>
      <div className={styles.splashInner}>
        <h1>
          Welcome to <span className={styles.appName}>blazechat</span>
        </h1>
        <h3>a free chatroom</h3>
        <p>
          blazechat is a free-to-use chat program offering a range of 'rooms'
          for various topics, as well as the ability for users to create and
          register their own permanent chat rooms and host private chats with
          friends
        </p>
        <button className={styles.button} onClick={() => {}}>
          PROCEED
        </button>
      </div>
    </div>
  );
};

export default Welcome;
