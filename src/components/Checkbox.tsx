import { useState } from "react";
import { useStyles } from "./Checkbox.styles";
import { useTheme } from "react-jss";

interface Props {
  checked?: boolean;
  width?: number;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({
  checked = false,
  width = 2.5,
  onChange,
}: Props): JSX.Element => {
  const theme = { ...useTheme(), width };
  const styles = useStyles({ theme });
  const [isChecked, setIsChecked] = useState(checked);
  const onCheckChange = () => {
    onChange(!isChecked);
    setIsChecked(!isChecked);
  };
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={isChecked} onChange={onCheckChange} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
