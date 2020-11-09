import React from "react";
import {
  StatisticsContainer,
  TopContainer,
  TopItemsContainer,
  TopCategoriesContainer,
  MonthlyContainer,
} from "./styled";

const Statistics = () => {
  return (
    <StatisticsContainer>
      <TopContainer>
        <TopItemsContainer>Items</TopItemsContainer>
        <TopCategoriesContainer>Categories</TopCategoriesContainer>
      </TopContainer>
      <MonthlyContainer>Monthly</MonthlyContainer>
    </StatisticsContainer>
  );
};

export default Statistics;
