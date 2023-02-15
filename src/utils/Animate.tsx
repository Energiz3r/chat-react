import React, { useState, useEffect, useRef } from "react";
import { useTheme, createUseStyles } from "react-jss";

const useMountTransition = (isMounted: boolean, delay: number) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: any;
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
  }, [delay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};

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

  const [isMounted, setIsMounted] = useState(false);
  const hasTransitionedIn = useMountTransition(isMounted, delay);

  const animatedClass =
    hasTransitionedIn && isMounted
      ? themeUnwrapped.animVisible[direction]
      : themeUnwrapped.animInVisible[direction];

  const theme = {
    ...useTheme(),
    animatedClass,
  };

  const styles = useStyles({ theme });

  useEffect(() => {
    setIsMounted(visible);
  }, [visible]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return (
        <div className={styles.wrapper}>{React.cloneElement(child, {})}</div>
      );
    }
    return child;
  });

  return <>{(hasTransitionedIn || isMounted) && childrenWithProps}</>;
};

export default Animate;
