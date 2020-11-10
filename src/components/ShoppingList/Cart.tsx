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
} from "./style/styleCart";

import { Source, UndrawShoppingApp } from "../icons";
import { HiPlus } from "react-icons/hi";
import { FiMinus, FiTrash2 } from "react-icons/fi";
import Axios from "axios";

const List = () => {
  const {
    cart,

    removeFromCart,
    isControlToggleAddItem,
  } = useContext(Shopping);
  const [onToggleOperation, setOnToggleOperation] = useState(false);
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
            return (
              <CartItemContainer>
                <CartItemName>{item.name}</CartItemName>

                {onToggleOperation ? (
                  <CartItemOperation
                    onMouseLeave={() => {
                      setOnToggleOperation(!onToggleOperation);
                    }}
                  >
                    <button
                      className="remove operation-elements"
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    >
                      <FiTrash2 />
                    </button>
                    <button
                      className="decrease operation-elements"
                      onClick={() => {
                        item.count--;
                      }}
                    >
                      <FiMinus />
                    </button>
                    <CartItemNumber>{`${item.count} pcs`}</CartItemNumber>
                    <button
                      className="increase operation-elements"
                      onClick={() => {
                        item.count++;
                      }}
                    >
                      <HiPlus />
                    </button>
                  </CartItemOperation>
                ) : (
                  <CartItemNumber
                    onMouseOver={() => {
                      setOnToggleOperation(!onToggleOperation);
                    }}
                  >{`${item.count} pcs`}</CartItemNumber>
                )}
              </CartItemContainer>
            );
          })}
        </CartFullItems>
      ) : (
        <CartNoItems>
          <div className="no-items-p">No Items</div>
          <div className="no-items-logo">
            <UndrawShoppingApp />
          </div>
        </CartNoItems>
      )}

      <CartSave>
        <div className={`save-container ${isThereAnyClassContainer}`}>
          <input
            value={nameVal}
            onChange={(e) => {
              setNameVal(e.currentTarget.value);
            }}
            className="text-box-cart"
            type="text"
            name="history-name"
            id="historyName"
            placeholder="Enter a name"
            required
          />

          <button
            className={`btn-save-cart ${isThereAnyClass}`}
            type="submit"
            onClick={() => {
              addToHistory(cart);
              setNameVal("");
            }}
          >
            Save
          </button>
        </div>
      </CartSave>
    </CartContainer>
  );
};
export default List;
