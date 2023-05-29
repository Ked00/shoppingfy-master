import {useState} from "react";

type outPut = {
  isShowing: boolean;
  reverseShowing: () => void;
  setShowingState: (status: boolean) => void;
};

export function useIsOpen(show: boolean): outPut {
  const [isShowing, setIsShowing] = useState(show);
  console.log(show)

  function reverseShowing() {
    setIsShowing((prev) => !prev);
  }

  function setShowingState(status: boolean) {
    setIsShowing(status);
  }

  return {
    isShowing: isShowing,
    reverseShowing: reverseShowing,
    setShowingState: setShowingState
  };
}
