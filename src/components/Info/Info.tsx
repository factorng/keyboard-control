import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../shared/store";

export function Info() {
  const selectedIndexes = useSelector(
    (state: RootState) => state.keyBoardControl.selectedIndexes
  );
  return (
    <div>
      <h3>Info</h3>
      {selectedIndexes.map(
        (selectedIndex: [], i: number) =>
          selectedIndex && (
            <>
              <h4>Popup number{i}</h4>
              {selectedIndex.map((subIndex) => (
                <p>{subIndex}</p>
              ))}
            </>
          )
      )}
    </div>
  );
}
