import React from "react";
import { BsArrowLeft, BsCalendar } from "react-icons/bs";
import {
  SubTitle,
  Title,
  Container,
  PName,
  PPieces,
} from "./style/styledDetails";
import {
  BackButton,
  BtnBack,
} from "../../components/ShoppingList/style/styleOverview";
import { ShoppingDateContainer, ShoppingDateDetail } from "./style/styledIndex";
import {
  ContainerProduct,
  ProductsView,
} from "../../components/Products/styled";

interface PropTypes {
  isControlDetail: () => void;
}

const Details = ({ isControlDetail }: PropTypes) => {
  const d = new Date();

  return (
    <Container>
      <BtnBack>
        <BackButton onClick={isControlDetail}>
          <BsArrowLeft />
          back
        </BackButton>
      </BtnBack>

      <Title>
        <SubTitle>Grocery List</SubTitle>
        <ShoppingDateContainer>
          <BsCalendar size="1.5rem" />
          <ShoppingDateDetail>
            {d.getMonth() + "." + d.getDay() + "." + d.getFullYear()}
          </ShoppingDateDetail>
        </ShoppingDateContainer>
      </Title>

      <ProductsView>
        <ContainerProduct>
          <PName>Avacado </PName>
          <PPieces>3 pcs</PPieces>
        </ContainerProduct>
        <ContainerProduct>
          <PName>Cookies Chocolate </PName>
          <PPieces>3 pcs</PPieces>
        </ContainerProduct>
      </ProductsView>
    </Container>
  );
};

export default Details;
