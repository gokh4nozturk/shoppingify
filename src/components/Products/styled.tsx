import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(6, 1fr);
`;

export const ContainerProduct = styled.div`
  display: flex;
  justify-content: space-around;
  width: 182px;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;
