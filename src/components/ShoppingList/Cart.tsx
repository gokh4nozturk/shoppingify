import React, { useCallback, useContext, useEffect, useState } from "react";
import { Shopping } from "../../context";

import { CartAddItem } from "./style/styleAddItem";
import {
  CartContainer,
  CartFullItems,
  CartNoItems,
  CartSave,
  CartFullItemsTitle,
  Title,
  CartItemContainer,
  CartItemName,
  CartItemNumber,
  CartItemOperation,
  CartItemOp,
  CartItemOpBtn,
  NoItemsMessage,
  NoItemsLogo,
  SavingContainer,
  CartSaveTB,
  CartSaveBtn,
} from "./style/styleCart";

import { Source, UndrawShoppingApp } from "../icons";
import { HiPlus } from "react-icons/hi";
import { FiMinus, FiTrash2 } from "react-icons/fi";
import Axios from "axios";
import CartItem from "./CartItem";

const List = () => {
  const { cart, isControlToggleAddItem } = useContext(Shopping);

  const [isThereAny, setIsThereAny] = useState(false);
  const [nameVal, setNameVal] = useState("");
  const isThereAnyClass = isThereAny ? "is-there" : "";
  const isThereAnyClassContainer = isThereAny ? "is-there-container" : "";

  const addToHistory = useCallback(
    (cart) => {
      Axios.post("/api/history", {
        name: nameVal,
        listItem: cart,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [nameVal]
  );

  useEffect(() => {
    cart.length > 0 ? setIsThereAny(true) : setIsThereAny(false);
  }, [cart]);

  return (
    <CartContainer>
      <CartAddItem>
        <Source className="add-item-logo" />
        <div className="add-item-space" />
        <div className="add-item-btn-p">
          <p className="p-add-item">Didn't find what you need?</p>
          <button className="btn-add-item" onClick={isControlToggleAddItem}>
            Add Item
          </button>
        </div>
      </CartAddItem>

      {cart.length > 0 ? (
        <CartFullItems>
          <CartFullItemsTitle>
            <Title>Shopping List</Title>
          </CartFullItemsTitle>

          {cart.map((item) => {
            return <CartItem item={item} />;
          })}
        </CartFullItems>
      ) : (
        <CartNoItems>
          <NoItemsMessage>No Items</NoItemsMessage>
          <NoItemsLogo>
            <UndrawShoppingApp />
          </NoItemsLogo>
        </CartNoItems>
      )}

      <CartSave>
        <SavingContainer className={`${isThereAnyClassContainer}`}>
          <CartSaveTB
            value={nameVal}
            onChange={(e) => {
              setNameVal(e.currentTarget.value);
            }}
            type="text"
            name="history-name"
            id="historyName"
            placeholder="Enter a name"
            required
          />

          <CartSaveBtn
            className={`${isThereAnyClass}`}
            type="submit"
            onClick={() => {
              addToHistory(cart);
              setNameVal("");
            }}
          >
            Save
          </CartSaveBtn>
        </SavingContainer>
      </CartSave>
    </CartContainer>
  );
};
export default List;
