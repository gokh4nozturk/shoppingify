import React, { useContext } from "react";
import {
  OverviewContainer,
  BtnBack,
  BackButton,
  OverviewMain,
  ProductImageContainer,
  ProductImage,
  ProductNameContainer,
  ProductName,
  ProductCategoryContainer,
  ProductCategory,
  ProductNoteContainer,
  ProductNote,
  BtnContainer,
  DeleteButton,
  AddToCartButton,
} from "./style/styleOverview";
import { BsArrowLeft } from "react-icons/bs";
import { Shopping } from "../../context";

const Overview = () => {
  const { isControlToggleOverview, addToCart, overviewItem } = useContext(
    Shopping
  );

  return (
    <OverviewContainer>
      <BtnBack>
        <BackButton
          onClick={() => {
            isControlToggleOverview(false);
          }}
        >
          <BsArrowLeft />
          back
        </BackButton>
      </BtnBack>

      {overviewItem.map((item) => {
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
                formMethod="post"
                formAction={`api/product/${item._id}`}
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
      })}
    </OverviewContainer>
  );
};

export default Overview;
