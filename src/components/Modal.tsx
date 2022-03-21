import { useStyles } from "./Modal.styles";
import { useTheme } from "react-jss";

interface Props {
  children?: React.ReactNode;
}

const Modal = ({ children }: Props): JSX.Element => {
  const theme = { ...useTheme() };
  const styles = useStyles({ theme });
  return (
    <div className={styles.modalOuter}>
      <div className={styles.modalInner}>{children}</div>
    </div>
  );
};

export default Modal;
