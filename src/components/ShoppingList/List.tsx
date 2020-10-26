import React from "react";
import { ListContainer } from "./styled";

interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const List = (Props: ToggleProps) => {
  return (
    <ListContainer>
      <div>
        <button onClick={Props.ClickHandler}>Add Item</button>
      </div>
      <div></div>
      <div>
        <input type="text" name="" id="" />
        <button type="submit">Save</button>
      </div>
    </ListContainer>
  );
};
export default List;
