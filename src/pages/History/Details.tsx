import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

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

import { ProductType } from "../../components/Products/Product";

export interface HistoryType {
  _id: string;
  name: string;
  listItem: ProductType[];
  completed: boolean;
  createdAt: Date;
}

const Details = ({ match }: any) => {
  const { goBack } = useHistory();
  const [list, setList] = useState<HistoryType[]>([]);
  const [historyProduct, setHistoryProduct] = useState<ProductType[]>([]);
  const d = new Date();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const fetchList = useCallback(async () => {
    const newList = await Axios.get(`/api/history/${match.params.id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    setList([newList]);
    setHistoryProduct(newList.listItem);
  }, [match]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <Container>
      <BtnBack>
        <BackButton onClick={goBack}>
          <BsArrowLeft />
          back
        </BackButton>
      </BtnBack>

      {list.map((item) => {
        return (
          <Title>
            <SubTitle>{item.name}</SubTitle>
            <ShoppingDateContainer>
              <BsCalendar size="1.5rem" />
              <ShoppingDateDetail>
                {days[d.getDay()] +
                  "  " +
                  "" +
                  d.getMonth() +
                  " " +
                  d.getDate() +
                  " " +
                  d.getFullYear()}
              </ShoppingDateDetail>
            </ShoppingDateContainer>
          </Title>
        );
      })}

      {historyProduct.map((item) => {
        return (
          <ProductsView>
            <ContainerProduct>
              <PName>{item.name}</PName>
              <PPieces>3 pcs</PPieces>
            </ContainerProduct>
          </ProductsView>
        );
      })}
    </Container>
  );
};

export default Details;
