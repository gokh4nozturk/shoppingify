import React, { useContext } from "react";
import {
  ListContainer,
  ListAddItem,
  ListFullItems,
  ListNoItems,
  ListSave,
  ListFullItemsTitle,
  Title,
  CartItemContainer,
  CartItemName,
  CartItemNumber,
  CartItemOperation,
} from "./styled";

import { Source, UndrawShoppingApp } from "../icons/";
import { Shopping } from "../../context";

interface Props {
  onToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const List = ({ onToggle }: Props) => {
  const { cart } = useContext(Shopping);
  return (
    <ListContainer>
      <ListAddItem>
        <Source className="add-item-logo" />
        <div className="add-item-space" />
        <div className="add-item-btn-p">
          <p className="p-add-item">Didn't find what you need?</p>
          <button className="btn-add-item" onClick={onToggle}>
            Add Item
          </button>
        </div>
      </ListAddItem>

      {cart.length > 0 ? (
        <ListFullItems>
          <ListFullItemsTitle>
            <Title>Shopping List</Title>
            <button>Edit</button>
          </ListFullItemsTitle>
          {cart.map((item) => {
            return (
              <CartItemContainer>
                <CartItemName>{item.name}</CartItemName>
                <CartItemNumber>3 psc</CartItemNumber>
                <CartItemOperation>
                  <p>operation</p>
                </CartItemOperation>
              </CartItemContainer>
            );
          })}
        </ListFullItems>
      ) : (
        <ListNoItems>
          <div className="no-items-p">No Items</div>
          <div className="no-items-logo">
            <UndrawShoppingApp />
          </div>
        </ListNoItems>
      )}

      <ListSave>
        <div className="save-container">
          <input
            className="text-box-list"
            type="text"
            name=""
            id=""
            placeholder="Enter a name"
          />
          <button className="btn-save-list" type="submit">
            Save
          </button>
        </div>
      </ListSave>
    </ListContainer>
  );
};
export default List;
