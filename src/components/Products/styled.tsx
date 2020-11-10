import styled from "styled-components";

export const ProductsContainer = styled.div`
  position: relative;
  display: inline-grid;
  grid-template-rows: 6rem 10% 1fr;
  grid-gap: 1rem;
  height: 100%;
  width: 100%;
`;

export const ProductsCategories = styled.div`
  grid-row: 2/3;
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

export const ProductsTop = styled.div`
  grid-row: 1/2;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
`;

export const ProductsTitle = styled.div`
  grid-column: 1/2;
  display: inline-flex;
  align-items: center;

  .shoppingify {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const SearchBox = styled.div`
  grid-column: 2/3;
`;

export const ProductsView = styled.div`
  grid-row: 3/4;
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

  .btn-add-to-list {
    grid-column: 2/3;
    height: 1.5em;
    width: 1.5em;
    font-size: 1.4em;
    color: #c1c1c4;
    border: 0;
    background: #ffffff;
  }

  .product-name {
    grid-column: 1/2;
    padding: 0.2em 0.3em;
    margin: 0;
  }

  .btn-add-to-list:hover {
    cursor: pointer;
  }
`;
