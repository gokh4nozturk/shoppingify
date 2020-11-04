import React, { useContext } from "react";
import { Shopping } from "../../context";
import {
  AddItemContainer,
  BtnContainer,
  FormContainer,
  InputContainer,
  InputElement,
  OptionCategories,
  SelectCategories,
  TitleAddItem,
} from "./style/styleAddItem";

const AddItem = () => {
  const { categories, isControlToggleAddItem } = useContext(Shopping);

  return (
    <AddItemContainer>
      <TitleAddItem className="add-item-title">
        <p>Add a new item</p>
      </TitleAddItem>
      <FormContainer
        action="/api/product"
        method="post"
        target="_blank"
        className="form"
      >
        <InputContainer>
          <label htmlFor="name-item">Name</label>

          {/* styled.input`margin-bottom:10px;` */}
          <InputElement
            type="text"
            name="name"
            id="name-item"
            placeholder="Enter a name"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="note-item">Note (optional)</label>

          <InputElement
            type="text"
            name="note"
            id="note-item"
            placeholder="Enter a note"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="image-item">Image (optional)</label>

          <InputElement
            type="text"
            name="image"
            id="image-item"
            placeholder="Enter a url"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="image-item">Category</label>

          <SelectCategories name="category" id="category-item" required>
            {categories.map((item) => {
              return <OptionCategories value={item}>{item}</OptionCategories>;
            })}
          </SelectCategories>
        </InputContainer>
        <BtnContainer>
          <button
            className="btn-cancel buttons"
            onClick={isControlToggleAddItem}
          >
            Cancel
          </button>
          <button className="btn-save buttons" type="submit">
            Save
          </button>
        </BtnContainer>
      </FormContainer>
    </AddItemContainer>
  );
};
export default AddItem;
