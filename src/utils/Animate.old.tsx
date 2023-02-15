import React, { useState, useEffect, useRef } from "react";
import { useTheme, createUseStyles } from "react-jss";

// const useMountTransition = (isMounted: boolean, delay: number) => {
//   const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

//   useEffect(() => {
//     let timeoutId: any;
//     if (isMounted && !hasTransitionedIn) {
//       setHasTransitionedIn(true);
//     } else if (!isMounted && hasTransitionedIn) {
//       timeoutId = setTimeout(() => {
//         setHasTransitionedIn(false);
//       }, delay);
//     }

//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [delay, isMounted, hasTransitionedIn]);

//   return hasTransitionedIn;
// };

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { animatedClass } = theme;
  return {
    wrapper: {
      ...animatedClass,
    },
  };
});

interface Props {
  children: React.ReactNode;
  visible?: boolean;
  direction?: "up" | "down" | "left" | "right";
}

const Animate = ({
  children,
  visible = true,
  direction = "up",
}: Props): JSX.Element => {
  const themeUnwrapped: any = useTheme();
  const delay = themeUnwrapped.defaultTransitionSpeed * 1000;

  const [shouldMount, setShouldMount] = useState(visible);

  console.log(direction, visible, shouldMount);

  const animatedClass =
    visible && shouldMount
      ? themeUnwrapped.animVisible[direction]
      : themeUnwrapped.animInVisible[direction];

  const theme = {
    ...useTheme(),
    animatedClass,
  };

  useEffect(() => {
    console.log(
      "checking mounting",
      visible === false,
      visible !== shouldMount
    );
    if (visible === false && visible !== shouldMount) {
      console.log(direction, "unmounting");
      setTimeout(() => {
        setShouldMount(false);
      }, delay);
    } else if (visible === true) {
      console.log(direction, "mounting");
      setShouldMount(true);
    }
  }, [visible]);

  const styles = useStyles({ theme });

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return (
        <div className={styles.wrapper}>{React.cloneElement(child, {})}</div>
      );
    }
    return child;
  });

  return <>{shouldMount && childrenWithProps}</>;
};

export default Animate;
