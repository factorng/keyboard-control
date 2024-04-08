import { createPortal } from "react-dom";

interface ReactPortalProps {
  children?: React.ReactNode;
  wrapperId: number;
}

export function Portal({ children, wrapperId }: ReactPortalProps) {
  let element = document.getElementById(wrapperId.toString());

  if (!element) {
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId.toString());
    document.body.appendChild(wrapperElement);
    element = wrapperElement;
  }

  return createPortal(children, element);
}
