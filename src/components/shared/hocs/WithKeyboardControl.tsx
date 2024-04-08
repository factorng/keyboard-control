import { useEffect } from "react";
import { useKeyPress } from "../hooks";
import { useDispatch } from "react-redux";
import {
  arrowUp,
  arrowDown,
  arrowLeft,
  arrowRight,
  setEnterPress,
} from "./keyboardControlSlice";

interface WithKeyboardControlProps {
  children: React.ReactNode;
}

export const WithKeyboardControl = (props: WithKeyboardControlProps) => {
  const { children } = props;
  const dispatch = useDispatch();
  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const arrowLeftPressed = useKeyPress("ArrowLeft");
  const arrowRightPressed = useKeyPress("ArrowRight");
  const enterPressed = useKeyPress("Enter");

  useEffect(() => {
    if (arrowUpPressed) {
      dispatch(arrowUp());
    }
  }, [arrowUpPressed, dispatch]);

  useEffect(() => {
    if (arrowDownPressed) {
      dispatch(arrowDown());
    }
  }, [arrowDownPressed, dispatch]);

  useEffect(() => {
    if (arrowLeftPressed) {
      dispatch(arrowLeft());
    }
  }, [arrowLeftPressed, dispatch]);

  useEffect(() => {
    if (arrowRightPressed) {
      dispatch(arrowRight());
    }
  }, [arrowRightPressed, dispatch]);

  useEffect(() => {
    if (enterPressed) {
      dispatch(setEnterPress({ isEnterPressed: true }));
    }
  }, [enterPressed, dispatch]);

  return <>{children}</>;
};
