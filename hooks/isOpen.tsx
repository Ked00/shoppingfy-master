import {useState} from "react";

type outPut = {
  isShowing: boolean;
  reverseShowing: () => void;
};

export function useIsOpen(show = true): outPut {
  const [isShowing, setIsShowing] = useState(show);

  function reverseShowing() {
    setIsShowing((prev) => !prev);
  }

  return {
    isShowing: isShowing,
    reverseShowing: reverseShowing
  };
}
