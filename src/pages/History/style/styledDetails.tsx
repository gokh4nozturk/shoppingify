import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1em 1fr 3em 1fr;
  grid-gap: 1em;
  margin-top: 2em;

  .btn-back {
    grid-row: 1/2;
  }
`;

export const Title = styled.div`
  grid-row: 2/3;
  margin: 2em 0;
`;

export const SubTitle = styled.p`
  color: #34333a;

  font-size: ${({ theme }) => theme.fontSizes.xLarge};
`;

export const ProductsCategories = styled.div`
  grid-row: 3/4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 2em;
`;

export const ProductsCategory = styled.div`
  padding: 0.5em 1em;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
    background: #c1c1c4;
  }
`;

export const ProductsView = styled.div`
  grid-row: 4/5;
  display: inline-grid;
  grid-gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  height: 5em;
`;

export const ContainerProduct = styled.div`
  display: inline-grid;
  grid-template-columns: minmax(120px, 30%) 1fr;
  align-items: center;
  width: 100%;
  height: 4rem;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const PName = styled.p`
  grid-column: 1/2;
  padding: 0 0.5em;
`;

export const PPieces = styled.p`
  grid-column: 2/3;
  display: inline-flex;
  justify-content: flex-end;
  padding: 0.5em;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
`;
