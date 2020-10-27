import React from "react";
import { ListContainer, ListAddItem, ListNoItems, ListSave } from "./styled";

import { Source, UndrawShoppingApp } from "../icons/";

interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const List = (Props: ToggleProps) => {
  return (
    <ListContainer>
      <ListAddItem className="list-items">
        <Source className="add-item-logo" />
        <div className="add-item-space"></div>
        <div className="add-item-btn-p">
          <p className="p-add-item">Didn't find what you need?</p>
          <button className="btn-add-item" onClick={Props.ClickHandler}>
            Add Item
          </button>
        </div>
      </ListAddItem>

      <ListNoItems className="list-items">
        <div className="no-items-p">No Items</div>
        <div className="no-items-logo">
          <UndrawShoppingApp />
        </div>
      </ListNoItems>

      <ListSave className="list-items">
        <input type="text" name="" id="" />
        <button type="submit">Save</button>
      </ListSave>
    </ListContainer>
  );
};
export default List;
