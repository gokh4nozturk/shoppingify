import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-rows: 150px 1fr 1fr;
  grid-gap: 1rem;
  height: 978px;

  .categoriess {
    grid-row: 3/4;
  }
`;

export const ProductsTop = styled.div`
  grid-row: 1/2;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;

  .title {
    grid-column: 1/2;
    display: inline-flex;
    align-items: center;

    .shoppingify {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .title p {
    display: inline;
  }

  .search-box {
    grid-column: 2/3;
  }
`;

export const ProductsView = styled.div`
  grid-row: 2/3;
  display: inline-grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

export const ContainerProduct = styled.div`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  .btn-add-to-list {
    height: 25px;
    width: 25px;
    font-size: 20px;
    color: #c1c1c4;
    border: 0;
    background: #ffffff;
  }

  .btn-add-to-list:hover {
    cursor: pointer;
  }
`;
