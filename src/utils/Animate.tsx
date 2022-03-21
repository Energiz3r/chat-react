import React, { useState, useEffect } from "react";
import { useTheme, createUseStyles } from "react-jss";

const useMountTransition = (isMounted: boolean, unmountDelay: number) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: any;
    const delay = unmountDelay * 1000;

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => {
        setHasTransitionedIn(false);
      }, delay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};

interface Props {
  children: React.ReactNode;
  visible: "initialOn" | "initialOff" | true | false;
  direction?: "up" | "down" | "left" | "right";
}

export const useStyles = createUseStyles<any, any>((theme: any) => {
  const { animatedClass } = theme;
  return {
    wrapper: {
      ...animatedClass,
    },
  };
});

const Animate = ({
  children,
  visible,
  direction = "up",
}: Props): JSX.Element => {
  const themeUnwrapped: any = useTheme();
  const [show, setShow] = useState(visible === "initialOn" || visible === true);
  if (visible !== "initialOn" && visible !== "initialOff") {
    if (show !== visible) {
      setShow(visible);
    }
  }
  const transitioned = useMountTransition(
    show,
    themeUnwrapped.defaultTransitionSpeed
  );
  const animatedClass =
    transitioned && show
      ? themeUnwrapped.animVisible[direction]
      : themeUnwrapped.animInVisible[direction];
  const theme = {
    ...useTheme(),
    animatedClass,
  };
  const toggleVisibility = () => setShow(!show);
  const styles = useStyles({ theme });

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return (
        <div className={styles.wrapper}>
          {React.cloneElement(child, {
            toggleVisibility,
          })}
        </div>
      );
    }
    return child;
  });

  return <>{(transitioned || show) && childrenWithProps}</>;
};

export default Animate;
