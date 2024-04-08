import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { closePopup } from "../Popup/popupSlice";
import { Portal } from "../shared/Portal";
import "./Popup.scss";

interface PopupProps {
  title: JSX.Element;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isOpen: boolean;
  className?: string;
  id: number;
  isActive: boolean;
}

export function Popup(props: PopupProps) {
  const {
    title,
    children,
    footer,
    isOpen,
    className = "",
    id,
    isActive,
  } = props;
  const dispatch = useDispatch();
  const handleClose = useCallback(() => {
    isActive && dispatch(closePopup({ popupId: id }));
  }, [dispatch, id, isActive]);
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;
  return (
    <Portal wrapperId={id}>
      <div
        className={`popup ${className}`}
        style={{ top: "20px", left: `${(208 + 20) * id}px` }}>
        {title}
        <div className="popup__body">{children}</div>
        <div className="popup__footer">{footer}</div>
      </div>
    </Portal>
  );
}
