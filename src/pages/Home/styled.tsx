import styled from "styled-components";

export const HomeContainer = styled.section`
  display: grid;
  grid-template-columns: 70px 1fr 390px;
  place-items: center;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.secondary};
  /* background: black; */

  .home-item {
    margin: 0;
    width: 100%;
    height: 978px;
  }
  .part-nav {
    grid-column: 1/2;
    display: flex;
    align-items: flex-start;
    padding: 10px 0px;
  }
  .part-products {
    grid-column: 2/3;
    padding: 0 60px;
  }
  .part-shopping-list {
    grid-column: 3/4;
  }
`;
