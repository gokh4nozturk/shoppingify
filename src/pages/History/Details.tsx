import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";

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
  CompleteContainer,
  CompleteCancelBtn,
  CompleteBtn,
  CompleteDeleteBtn,
  Transparent,
} from "./style/styledDetails";
import {
  BackButton,
  BtnBack,
} from "../../components/ShoppingList/style/styleOverview";
import {
  border,
  ShoppingDateContainer,
  ShoppingDateDetail,
  ShoppingState,
} from "./style/styledIndex";
import { FiTrash2 } from "react-icons/fi";

import { ProductType } from "../Products/Product";
import { Shopping } from "../../context";
import CancelPopUp from "../../components/Modal";

export interface HistoryType {
  _id: string;
  name: string;
  listItem: ProductType[];
  completed: boolean;
  createdAt: Date;
  pieces: number;
}

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const d = new Date();

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

  const UpdateTheHistory = useCallback(
    (state) => {
      Axios.put(`/api/history/${id}`, {
        completed: state,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [id]
  );

  const DeleteTheHistory = useCallback(
    //this function will use with pop up
    () => {
      Axios.delete(`/api/history/${id}`)
        .then(function (response) {
          console.log(response);
          goBack();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [id, goBack]
  );

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
        return (
          <Title key={item._id}>
            <SubTitle>{item.name}</SubTitle>
            <ShoppingState
              className="complete-state"
              color={item.completed ? border.completed : border.cancelled}
            >
              {item.completed ? `completed` : `cancelled`}
            </ShoppingState>
            <ShoppingDateContainer className="sub-title-date">
              <BsCalendar size="1.5rem" />
              <ShoppingDateDetail>
                {/* 1) date-fns  */}
                {/* {https://date-fns.org/ , https://date-fns.org/v2.16.1/docs/format
                 */}
                {/* d.toLocaleFormat() */}
              </ShoppingDateDetail>
            </ShoppingDateContainer>
            <CompleteContainer>
              <CompleteDeleteBtn
                onClick={() => {
                  DeleteTheHistory();
                }}
              >
                <FiTrash2 size="1.5em" />
              </CompleteDeleteBtn>
              <CompleteCancelBtn
                onClick={() => {
                  UpdateTheHistory(false);
                }}
              >
                Cancel
              </CompleteCancelBtn>
              <CompleteBtn
                onClick={() => {
                  UpdateTheHistory(true);
                }}
              >
                Complete
              </CompleteBtn>
            </CompleteContainer>
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
