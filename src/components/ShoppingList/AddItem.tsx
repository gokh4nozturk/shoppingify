import React from "react";
import { AddItemContainer } from "./styled";

interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddItem = (Props: ToggleProps) => {
  return (
    <AddItemContainer>
      <form action="" method="post" className="form">
        <input type="text" name="" id="" />
        <br />
        <input type="text" name="" id="" />
        <br />
        <input type="text" name="" id="" />
        <br />
      </form>
      <button onClick={Props.ClickHandler}>Close</button>
    </AddItemContainer>
  );
};
export default AddItem;
