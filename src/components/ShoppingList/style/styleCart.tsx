import styled from "styled-components";
import { FadeIn } from "../../../theme/globalStyles";

export const CartContainer = styled.div`
  display: inline-grid;
  grid-template-rows: 200px 1fr 130px;
  background: #fff0de;
  height: 100%;
`;

export const CartFullItems = styled.div`
  display: inline-flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 40px;
`;

export const CartFullItemsTitle = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  .on-toggle-edit-btn {
    border: 0;
    background: none;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  text-align: left;

  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const CartItemContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  font-weight: 500;
  height: 4rem;

  font-size: ${({ theme }) => theme.fontSizes.large};

  .checked {
    text-decoration: line-through;

    color: black;
  }
`;

export const CartItemName = styled.p`
  margin: 0;
`;

export const CartItemNumber = styled.span`
  padding: 5px 10px;

  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.primary};
`;

export const CartItemOperation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  width: 12rem;
  padding: 0.3em;

  border-radius: ${({ theme }) => theme.radius.secondary};

  .operation-elements {
    border: 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  .remove {
    height: 2.2em;
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.secondary};
  }
  .decrease {
    background: #fff;
  }
  .increase {
    background: #fff;
  }
`;

export const CartItemCheckBox = styled.input`
  margin: 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const CartSave = styled.div`
  grid-row: 3/4;
  display: inline-grid;
  place-items: center;
  width: 100%;
  height: 130px;
  background: #fff;

  .save-container {
    display: inline-flex;
    justify-content: center;
    width: 310px;
    height: 64px;
    border: 2px solid #c1c1c4;
    box-sizing: border-box;

    border-radius: ${({ theme }) => theme.radius.secondary};
  }

  .text-box-cart {
    display: inline-flex;
    width: 220px;
    height: 60px;
    border: 0;
    color: #bdbdbd;
    box-sizing: border-box;

    font-size: ${({ theme }) => theme.fontSizes.medium};
    border-radius: ${({ theme }) => theme.radius.secondary};
  }

  .btn-save-cart {
    height: 35px;
    border: 0;
    width: 90px;
    height: 60px;
    color: #fff;
    box-sizing: border-box;
    background: #c1c1c4;

    border-radius: ${({ theme }) => theme.radius.secondary};
  }

  .is-there-container {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  .is-there {
    background: ${({ theme }) => theme.colors.primary};
    animation: 1s ${FadeIn} ease-in;
  }
`;

export const CartNoItems = styled.div`
  grid-row: 2/3;
  display: inline-grid;
  grid-template-rows: 1fr 1fr;
  margin: 40px;
  margin-bottom: 0;

  .no-items-p {
    grid: 1/2;
    display: inline-grid;
    place-items: center;
  }

  .no-items-logo {
    grid: 2/3;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0;
    margin: 0;
  }
`;
