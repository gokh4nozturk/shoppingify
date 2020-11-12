import React, { useContext, useState } from "react";
import { FiMinus, FiTrash2 } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import { ProductType, Shopping } from "../../../context";
import {
  CartItemContainer,
  CartItemName,
  CartItemNumber,
  CartItemOp,
  CartItemOpBtn,
  CartItemOperation,
} from "../style/styleCart";

interface Props {
  item: ProductType;
}

const CartItem = ({ item }: Props) => {
  const { removeFromCart, addToCart, cartItemMinus } = useContext(Shopping);
  const [onToggleOperation, setOnToggleOperation] = useState(false);

  return (
    <CartItemContainer>
      <CartItemName>{item.name}</CartItemName>

      <CartItemOp>
        {onToggleOperation ? (
          <CartItemOperation
            onMouseLeave={() => {
              setOnToggleOperation(!onToggleOperation);
            }}
          >
            <CartItemOpBtn
              className="remove"
              onClick={() => {
                removeFromCart(item);
              }}
            >
              <FiTrash2 />
            </CartItemOpBtn>
            <CartItemOpBtn
              onClick={() => {
                cartItemMinus(item);
              }}
            >
              <FiMinus />
            </CartItemOpBtn>
            <CartItemNumber>{`${item.count} pcs`}</CartItemNumber>
            <CartItemOpBtn
              onClick={() => {
                addToCart(item);
              }}
            >
              <HiPlus />
            </CartItemOpBtn>
          </CartItemOperation>
        ) : (
          <CartItemNumber
            onMouseOver={() => {
              setOnToggleOperation(!onToggleOperation);
            }}
          >{`${item.count} pcs`}</CartItemNumber>
        )}
      </CartItemOp>
    </CartItemContainer>
  );
};

export default CartItem;
