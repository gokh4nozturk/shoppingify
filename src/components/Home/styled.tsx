import styled from "styled-components";

export const HomeContainer = styled.section`
  display: grid;

  grid-template-columns: auto 1fr auto;
  place-items: center;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 0.5rem;

  .home-item:nth-child(2) {
    background: red;
  }
`;
