import React, { useCallback, useEffect, useMemo, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import { BsArrowLeft, BsCalendar } from "react-icons/bs";
import {
  SubTitle,
  Title,
  Container,
  PName,
  PPieces,
  ContainerProduct,
  ProductsView,
  ProductsCategories,
  ProductsCategory,
} from "./style/styledDetails";
import {
  BackButton,
  BtnBack,
} from "../../components/ShoppingList/style/styleOverview";
import { ShoppingDateContainer, ShoppingDateDetail } from "./style/styledIndex";

import { ProductType } from "../../components/Products/Product";

export interface HistoryType {
  _id: string;
  name: string;
  listItem: ProductType[];
  completed: boolean;
  createdAt: Date;
  pieces: number;
}

const Details = ({ match }: any) => {
  const [filter, setFilter] = useState("");
  const { goBack } = useHistory();
  const [list, setList] = useState<HistoryType[]>([]); //see the list
  const [historyProduct, setHistoryProduct] = useState<ProductType[]>([]); //see the products in the list
  const [listCategories, setListCategories] = useState<string[]>([]); //see the products' categories
  const d = new Date();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const fetchList = useCallback(async () => {
    const newList = await Axios.get(`/api/history/${match.params.id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    setList([newList]);
    setHistoryProduct(newList.listItem);
  }, [match]);

  const fetchCategories = useCallback(() => {
    const category = historyProduct.reduce<string[]>((acc, cur) => {
      const { category } = cur;
      const isInState = acc.includes(category);
      if (isInState) {
        return acc;
      }
      return [...acc, category];
    }, []);
    setListCategories(category);
  }, [historyProduct]);

  useEffect(() => {
    fetchList();
    fetchCategories();
  }, [fetchList, fetchCategories]);

  const filteredProducts: ProductType[] = useMemo(() => {
    // Check if there is a filter
    if (!filter) {
      return historyProduct;
    }
    // if no filter
    return historyProduct.filter((product) => product.category === filter);
  }, [filter, historyProduct]);

  return (
    <Container>
      <BtnBack className="btn-back">
        <BackButton onClick={goBack}>
          <BsArrowLeft />
          back
        </BackButton>
      </BtnBack>

      {list.map((item) => {
        return (
          <Title key={item._id}>
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

      <ProductsCategories>
        {listCategories.map((item) => (
          <ProductsCategory
            onClick={() => {
              setFilter(filter === item ? "" : item);
            }}
          >
            {item}
          </ProductsCategory>
        ))}
      </ProductsCategories>

      <ProductsView>
        {filteredProducts.map((item) => {
          return (
            <ContainerProduct key={item._id}>
              <PName>{item.name}</PName>
              <PPieces>{item.count + " pcs"}</PPieces>
            </ContainerProduct>
          );
        })}
      </ProductsView>
    </Container>
  );
};

export default Details;
