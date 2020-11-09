import styled from "styled-components";

export const StatisticsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
  height: 100%;
`;

export const TopContainer = styled.div`
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
`;

export const TopItemsContainer = styled.div`
  grid-column: 1/2;
  display: grid;
  place-items: center;
`;

export const TopCategoriesContainer = styled.div`
  grid-column: 2/3;
  display: grid;
  place-items: center;
`;

export const MonthlyContainer = styled.div`
  grid-row: 2/3;
  display: grid;
  place-items: center;
`;
