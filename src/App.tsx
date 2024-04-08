import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import {
  initPopups,
  openPopup,
  closePopup,
  setPopupActive,
} from "./components/Popup/popupSlice";
import { Popup } from "./components/Popup/Popup";
import { Info } from "./components/Info";
import { IconClose } from "./components/shared/Icons";
import type { RootState } from "./components/shared/store";
import "./App.scss";
import { WithKeyboardControl } from "./components/shared/hocs/WithKeyboardControl";

function App() {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(
    (state: RootState) => state.keyBoardControl.selectedIndex
  );
  const selectedPopup = useSelector(
    (state: RootState) => state.keyBoardControl.selectedPopup
  );
  const selectedIndexes = useSelector(
    (state: RootState) => state.keyBoardControl.selectedIndexes
  );
  const items = useMemo(
    () =>
      Array(6)
        .fill("")
        .map((el, i) => (el = i + 1)),
    []
  );
  const { popups } = useSelector((state: RootState) => state.popup);
  useEffect(() => {
    dispatch(initPopups({ popupsNames: ["first", "second", "third"] }));
  }, [dispatch]);
  useEffect(() => {
    dispatch(openPopup({ popupId: 3 }));
    dispatch(openPopup({ popupId: 2 }));
    dispatch(openPopup({ popupId: 1 }));
    dispatch(setPopupActive({ popupId: 1 }));
  }, [dispatch]);

  const isItemSelected = (popupNumber: number, itemNumber: number) => {
    if (selectedIndexes[popupNumber])
      return selectedIndexes[popupNumber].find(
        (el: number) => el === itemNumber
      );
    else return false;
  };

  return (
    <div className="app">
      <WithKeyboardControl>
        {popups.map((popup, i) => (
          <Popup
            title={
              <div className="popup__header">
                {popup.name}
                <button
                  onClick={() => dispatch(closePopup({ popupId: popup.id }))}
                  className="popup__button-close">
                  <IconClose width={20} height={20} fill="none" />
                </button>
              </div>
            }
            footer={""}
            isOpen={popup.isOpen}
            id={popup.id}
            key={popup.id}
            isActive={popup.isActive}>
            <ul className="popup__items">
              {items.map((el, i) => (
                <li
                  className={classNames("popup__item", {
                    popup__item_active:
                      selectedIndex === el && popup.id === selectedPopup,
                    popup__item_selected: isItemSelected(popup.id, el),
                  })}
                  key={i}>
                  {el}
                </li>
              ))}
            </ul>
          </Popup>
        ))}
      </WithKeyboardControl>
      <Info />
    </div>
  );
}

export default App;
