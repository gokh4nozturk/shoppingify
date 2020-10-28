import React, { useState } from "react";
import { AddItemContainer } from "./styled";

interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddItem = (Props: ToggleProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <AddItemContainer>
      <div className="add-item-title">
        <p>Add a new item</p>
      </div>
      <div className="add-item-form">
        <form action="" method="post" className="form">
          <label htmlFor="name-item">Name</label>
          <br />
          <br />

          <input
            type="text"
            name=""
            id="name-item"
            placeholder="Enter a name"
            onFocus={() => {
              setToggle(false);
            }}
          />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="note-item">Note (optional)</label>
          <br />
          <br />

          <input
            type="text"
            name=""
            id="note-item"
            placeholder="Enter a note"
            onFocus={() => {
              setToggle(false);
            }}
          />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="image-item">Image (optional)</label>
          <br />
          <br />

          <input
            type="text"
            name=""
            id="image-item"
            placeholder="Enter a url"
            onFocus={() => {
              setToggle(false);
            }}
          />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="image-item">Category</label>
          <br />
          <br />

          <input
            type="text"
            name=""
            id="image-item"
            placeholder="Enter a category"
            onFocus={() => {
              setToggle(true);
            }}
          />
        </form>
      </div>
      {toggle && (
        <div className="dropdown-categories">
          <p>dfkgfdlk</p>
          <p>dfkgfdlk</p>
          <p>dfkgfdlk</p>
        </div>
      )}

      <div className="add-item-btn-container">
        <button className="btn-cancel buttons" onClick={Props.ClickHandler}>
          Cancel
        </button>
        <button className="btn-save buttons" type="submit">
          Save
        </button>
      </div>
    </AddItemContainer>
  );
};
export default AddItem;
