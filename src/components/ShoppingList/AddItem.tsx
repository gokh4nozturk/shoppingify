import React, { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Shopping } from "../../context";
import {
  AddItemContainer,
  BtnContainer,
  FormContainer,
  InputContainer,
  InputElement,
  OptionCategories,
  DatalistCategories,
  TitleAddItem,
} from "./style/styleAddItem";
import { BackButton, BtnBack } from "./style/styleOverview";

const AddItem = () => {
  const { categories, isControlToggleAddItem } = useContext(Shopping);

  return (
    <AddItemContainer>
      <BtnBack>
        <BackButton
          onClick={() => {
            isControlToggleAddItem();
          }}
        >
          <BsArrowLeft />
          back
        </BackButton>
      </BtnBack>

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

          <InputElement
            type="text"
            list="category-items"
            placeholder="Enter a category"
            name="category"
            id="category-item"
            required
          />
          <DatalistCategories id="category-items">
            {categories.map((item) => {
              return <OptionCategories value={item}>{item}</OptionCategories>;
            })}
          </DatalistCategories>
        </InputContainer>
        <BtnContainer>
          <button
            className="btn-cancel buttons"
            type="reset"
            onClick={() => {}}
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
