import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";
import {
  Container,
  PName,
  PPieces,
  ContainerProduct,
  ProductsView,
  ProductsCategories,
  ProductsCategory,
  Transparent,
} from "../style/styledDetails";
import {
  BackButton,
  BtnBack,
} from "../../../components/ShoppingList/style/styleOverview";

import { ProductType } from "../../Products/Product";
import { Shopping } from "../../../context";
import CancelPopUp from "../../../components/Modal";
import DetailsTitle from "./detailsTitle";

export interface HistoryType {
  _id: string;
  name: string;
  listItem: ProductType[];
  completed: boolean;
  createdAt: Date;
  pieces: number;
}

const Details = () => {
  const [filter, setFilter] = useState("");
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const [list, setList] = useState<HistoryType[]>([]); //see the list
  const [historyProduct, setHistoryProduct] = useState<ProductType[]>([]); //see the products in the list
  const [listCategories, setListCategories] = useState<string[]>([]); //see the products' categories
  const { isControlPopUpToggle, onTogglePopUp } = useContext(Shopping);

  const fetchList = useCallback(async () => {
    const newList = await Axios.get(`/api/history/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    setList([newList]);
    setHistoryProduct(newList.listItem);
  }, [id]);

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
      {onTogglePopUp ? <Transparent onClick={isControlPopUpToggle} /> : null}
      {onTogglePopUp ? <CancelPopUp /> : null}
      <BtnBack className="btn-back">
        <BackButton onClick={goBack}>
          <BsArrowLeft />
          back
        </BackButton>
      </BtnBack>

      {list.map((item) => {
        return <DetailsTitle item={item} id={id} />;
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
