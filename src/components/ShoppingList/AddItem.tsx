import Axios from "axios";
import React, { useContext, useState } from "react";
import { useCallback } from "react";
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
  InputElementArea,
} from "./style/styleAddItem";
import { BackButton, BtnBack } from "./style/styleOverview";

const AddItem = () => {
  const { categories, isControlToggleAddItem, fetchData } = useContext(
    Shopping
  );
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  const addToDB = useCallback(() => {
    Axios.post("/api/product", {
      name,
      note,
      category,
      image: imageUrl,
    })
      .then(function (response) {
        console.log(response);
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [name, category, note, imageUrl, fetchData]);

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
      <FormContainer className="form">
        <InputContainer>
          <label htmlFor="name-item">Name</label>

          <InputElement
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            type="text"
            name="name"
            id="name-item"
            placeholder="Enter a name"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="note-item">Note (optional)</label>

          <InputElementArea
            value={note}
            onChange={(e) => {
              setNote(e.currentTarget.value);
            }}
            rows={6}
            name="note"
            id="note-item"
            placeholder="Enter a note"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="image-item">Image (optional)</label>

          <InputElement
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.currentTarget.value);
            }}
            type="text"
            name="image"
            id="image-item"
            placeholder="Enter a url"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="image-item">Category</label>

          <InputElement
            value={category}
            onChange={(e) => {
              setCategory(e.currentTarget.value);
            }}
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
          <button className="btn-cancel buttons" type="reset">
            Cancel
          </button>
          <button
            className="btn-save buttons"
            type="submit"
            onClick={() => {
              addToDB();
            }}
          >
            Save
          </button>
        </BtnContainer>
      </FormContainer>
    </AddItemContainer>
  );
};
export default AddItem;
