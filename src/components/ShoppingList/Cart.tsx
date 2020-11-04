import React, { useContext, useEffect, useState } from "react";
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
} from "./style/styleCart";

import { Source, UndrawShoppingApp } from "../icons";
import { FaPencilAlt } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { FiMinus, FiTrash2 } from "react-icons/fi";

const List = () => {
  const { cart, removeFromCart, isControlToggleAddItem } = useContext(Shopping);
  const [onToggleEdit, setOnToggleEdit] = useState(false);
  const [onToggleOperation, setOnToggleOperation] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [isThereAny, setIsThereAny] = useState(false);

  const completedClass = completed ? "checked" : ""; //if checkBox is checked, add to item.name this className

  useEffect(() => {
    cart.length > 0 ? setIsThereAny(true) : setIsThereAny(false);
  }, [cart]);

  const isThereAnyClass = isThereAny ? "is-there" : "";
  const isThereAnyClassContainer = isThereAny ? "is-there-container" : "";

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
                    onChange={() => {
                      setCompleted(!completed);
                    }}
                  />
                )}
                <CartItemName className={`${completedClass}`}>
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

      <CartSave>
        <div className={`save-container ${isThereAnyClassContainer}`}>
          <input
            className="text-box-cart"
            type="text"
            name=""
            id=""
            placeholder="Enter a name"
          />
          <button className={`btn-save-cart ${isThereAnyClass}`} type="submit">
            Save
          </button>
        </div>
      </CartSave>
    </CartContainer>
  );
};
export default List;
