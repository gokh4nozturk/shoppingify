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

interface Props {
  onToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddItem = ({ onToggle }: Props) => {
  const { categories } = useContext(Shopping);

  return (
    <AddItemContainer>
      <TitleAddItem className="add-item-title">
        <p>Add a new item</p>
      </TitleAddItem>
      <FormContainer action="" method="post" className="form">
        <InputContainer>
          <label htmlFor="name-item">Name</label>

          {/* styled.input`margin-bottom:10px;` */}
          <InputElement
            type="text"
            name=""
            id="name-item"
            placeholder="Enter a name"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="note-item">Note (optional)</label>

          <InputElement
            type="text"
            name=""
            id="note-item"
            placeholder="Enter a note"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="image-item">Image (optional)</label>

          <InputElement
            type="text"
            name=""
            id="image-item"
            placeholder="Enter a url"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="image-item">Category</label>

          <SelectCategories name="" id="category-item" required>
            {categories.map((item) => {
              return <OptionCategories value={item}>{item}</OptionCategories>;
            })}
          </SelectCategories>
        </InputContainer>
      </FormContainer>

      <BtnContainer>
        <button className="btn-cancel buttons" onClick={onToggle}>
          Cancel
        </button>
        <button className="btn-save buttons" type="submit">
          Save
        </button>
      </BtnContainer>
    </AddItemContainer>
  );
};
export default AddItem;
