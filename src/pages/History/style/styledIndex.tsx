import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  color: #34333a;
  font-weight: bold;

  font-size: ${({ theme }) => theme.fontSizes.xLarge};
`;

export const DataContainer = styled.div``;

export const ResultsContainer = styled.div``;

export const ResultsMonth = styled.p`
  font-weight: 500;
  font-size: 12px;
`;

export const ShoppingContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr minmax(150px, 30%);
  padding: 0.5em 1.5em;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.radius.secondary};
`;

export const ShoppingName = styled.p`
  grid-column: 1/2;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.primary};
`;

export const DetailPartSecond = styled.div`
  grid-column: 2/3;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShoppingDateContainer = styled.div`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  color: #c1c1c4;
`;

export const ShoppingDateDetail = styled.div`
  margin-left: 0.6em;

  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const border = {
  completed: "#56CCF2",
  cancelled: "#EB5757",
};

export const ShoppingState = styled.span`
  padding: 0.4em 0.7em;

  font-size: ${({ theme }) => theme.fontSizes.small};
  border-radius: ${({ theme }) => theme.radius.secondary};
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
`;

export const ShoppingDetailBtn = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
`;
