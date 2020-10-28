import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerProduct = styled.div`
  flex: 0 1 150px; /*  No stretching: */
  margin: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 182px;
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
