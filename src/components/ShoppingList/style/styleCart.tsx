import styled from "styled-components";
import { FadeIn } from "../../../theme/globalStyles";

export const CartContainer = styled.div`
  display: inline-grid;
  grid-template-rows: 12.5rem 1fr 8.125rem;
  background: #fff0de;
  height: 100%;
`;

export const CartFullItems = styled.div`
  display: inline-flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 2.5rem;
`;

export const CartFullItemsTitle = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 700;
  text-align: left;

  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(10rem, 10%);
  grid-gap: 0.1em;
  padding: 1em 0;
  font-weight: 500;
  height: 4rem;

  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const CartItemName = styled.p`
  grid-column: 1/2;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: ${(props) => props.theme.main};
  margin: 0;
`;

export const CartItemOp = styled.div`
  grid-column: 2/3;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CartItemNumber = styled.span`
  width: fit-content;
  padding: 0.4em 0.8em;

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
  width: 10rem;
  padding: 0.3em;

  border-radius: ${({ theme }) => theme.radius.secondary};

  .remove {
    height: 2.2em;
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.secondary};
  }
`;

export const CartItemOpBtn = styled.button`
  background: #fff;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CartSave = styled.div`
  grid-row: 3/4;
  display: inline-grid;
  place-items: center;
  width: 100%;
  height: 8.125rem;
  background: #fff;

  .is-there-container {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  .is-there {
    background: ${({ theme }) => theme.colors.primary};
    animation: 1s ${FadeIn} ease-in;
  }
`;

export const SavingContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 20rem;
  height: 4rem;
  border: 2px solid #c1c1c4;
  box-sizing: border-box;

  border-radius: ${({ theme }) => theme.radius.secondary};
`;

export const CartSaveTB = styled.input`
  display: inline-flex;
  width: 13.75rem;
  height: 3.75rem;
  border: 0;
  color: #bdbdbd;
  box-sizing: border-box;

  font-size: ${({ theme }) => theme.fontSizes.medium};
  border-radius: ${({ theme }) => theme.radius.secondary};
`;

export const CartSaveBtn = styled.button`
  border: 0;
  width: 6rem;
  height: 3.75rem;
  color: #fff;
  box-sizing: border-box;
  background: #c1c1c4;

  border-radius: ${({ theme }) => theme.radius.secondary};
`;

export const CartNoItems = styled.div`
  grid-row: 2/3;
  display: inline-grid;
  grid-template-rows: 1fr 1fr;
  margin: 40px;
  margin-bottom: 0;
`;

export const NoItemsMessage = styled.div`
  grid: 1/2;
  display: inline-grid;
  place-items: center;
`;

export const NoItemsLogo = styled.div`
  grid: 2/3;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0;
  margin: 0;
`;
