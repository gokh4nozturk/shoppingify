import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 150px 1fr;
  grid-gap: 1rem;
`;

export const ProductsView = styled.main`
  grid-row: 2/3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerProduct = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 100%;
  margin: 5px;
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
