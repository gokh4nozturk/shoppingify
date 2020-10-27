import styled from "styled-components";

export const HomeContainer = styled.section`
  display: grid;
  grid-template-columns: 70px 1fr 390px;
  place-items: center;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  /* background: ${({ theme }) => theme.colors.secondary}; */
  background: black;

  .home-item {
    margin: 0;
  }
  .part-nav {
    grid: 1/2;
    display: flex;
    align-items: flex-start;
  }
  .part-products {
    grid: 2/3;
  }
  .part-shopping-list {
    grid: 3/4;
  }
`;
