import React from "react";
import { useLocalStorage, useTitle } from "react-use";
import {
  StatisticsContainer,
  TopContainer,
  TopItemsContainer,
  TopCategoriesContainer,
  MonthlyContainer,
} from "./styled";

const Statistics = () => {
  const [value, setValue, remove] = useLocalStorage("my-key", "foo");
  useTitle("Statistics");
  return (
    <StatisticsContainer>
      <TopContainer>
        <TopItemsContainer>Items</TopItemsContainer>
        <TopCategoriesContainer>Categories</TopCategoriesContainer>
      </TopContainer>
      <MonthlyContainer>
        <div>Value: {value}</div>
        <button onClick={() => setValue("bar")}>bar</button>
        <button onClick={() => setValue("baz")}>baz</button>
        <button onClick={() => remove()}>Remove</button>
        Monthly
      </MonthlyContainer>
    </StatisticsContainer>
  );
};

export default Statistics;
