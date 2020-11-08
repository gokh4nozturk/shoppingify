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
  CartItemCheckBox,
  CartCompletedBtn,
  CartCompleteCancelBtn,
  CartCompleteContainer,
} from "./style/styleCart";

import { Source, UndrawShoppingApp } from "../icons";
import { FaPencilAlt } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { FiMinus, FiTrash2 } from "react-icons/fi";

const List = () => {
  const {
    cart,
    removeFromCart,
    isControlToggleAddItem,
    toggleCartCompleted,
  } = useContext(Shopping);
  const [onToggleEdit, setOnToggleEdit] = useState(false);
  const [onToggleOperation, setOnToggleOperation] = useState(false);
  const [isThereAny, setIsThereAny] = useState(false);
  const [completedClass, setCompletedClass] = useState("");

  const isThereAnyClass = isThereAny ? "is-there" : "";
  const isThereAnyClassContainer = isThereAny ? "is-there-container" : "";

  const myFunc = useCallback((isCompleted: boolean) => {
    //if checkBox is checked, add to item.name this className
    const res = !isCompleted ? "line-through" : "none";
    setCompletedClass(res);
  }, []);

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
            <button
              className="on-toggle-edit-btn"
              onClick={() => {
                setOnToggleEdit(!onToggleEdit);
              }}
            >
              <FaPencilAlt />
            </button>
          </CartFullItemsTitle>

          {cart.map((item) => {
            return (
              <CartItemContainer>
                {onToggleEdit && (
                  <CartItemCheckBox
                    type="checkBox"
                    checked={item.completed}
                    onChange={() => {
                      toggleCartCompleted(item._id);
                      myFunc(item.completed);
                    }}
                  />
                )}
                <CartItemName theme={{ main: `${completedClass}` }}>
                  {item.name}
                </CartItemName>
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

      {onToggleEdit ? (
        <CartCompleteContainer>
          <CartCompleteCancelBtn>Cancel</CartCompleteCancelBtn>
          <CartCompletedBtn>Complete</CartCompletedBtn>
        </CartCompleteContainer>
      ) : (
        <CartSave>
          <div className={`save-container ${isThereAnyClassContainer}`}>
            <input
              formAction=""
              formMethod="post"
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
            >
              Save
            </button>
          </div>
        </CartSave>
      )}
    </CartContainer>
  );
};
export default List;
