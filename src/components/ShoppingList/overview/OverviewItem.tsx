import Axios from "axios";
import React, { useCallback, useContext } from "react";
import { Shopping } from "../../../context";
import { ProductType } from "../../../context";
import {
  AddToCartButton,
  BtnContainer,
  DeleteButton,
  OverviewMain,
  ProductCategory,
  ProductCategoryContainer,
  ProductImage,
  ProductImageContainer,
  ProductName,
  ProductNameContainer,
  ProductNote,
  ProductNoteContainer,
} from "../style/styleOverview";

interface Props {
  item: ProductType;
}

const OverviewItem = ({ item }: Props) => {
  const { addToCart, isControlToggleOverview, fetchData } = useContext(
    Shopping
  );

  const DeleteItem = useCallback(
    async (id) => {
      await Axios.delete(`api/product/${id}`)
        .then((res) => {
          console.log(res);
          fetchData(); //for any updates
        })
        .catch((err) => console.log(err));
    },
    [fetchData]
  );

  return (
    <>
      <OverviewMain>
        <ProductImageContainer>
          <ProductImage src={item.image} alt={item.name} />
        </ProductImageContainer>
        <ProductNameContainer>
          <p className="product-labels">Name</p>
          <ProductName>{item.name}</ProductName>
        </ProductNameContainer>
        <ProductCategoryContainer>
          <p className="product-labels">Category</p>
          <ProductCategory>{item.category}</ProductCategory>
        </ProductCategoryContainer>
        <ProductNoteContainer>
          <p className="product-labels">Note</p>
          <ProductNote>{item.note}</ProductNote>
        </ProductNoteContainer>
      </OverviewMain>

      <BtnContainer>
        <DeleteButton
          className="delete-item-btn"
          onClick={() => {
            DeleteItem(item._id);
            isControlToggleOverview(false);
          }}
        >
          delete
        </DeleteButton>
        <AddToCartButton
          className="add-to-cart-btn"
          onClick={() => {
            addToCart(item);
          }}
        >
          Add to list
        </AddToCartButton>
      </BtnContainer>
    </>
  );
};

export default OverviewItem;
