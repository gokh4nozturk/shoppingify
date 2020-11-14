import React from "react";
import { useTitle } from "react-use";
import TwoSimplePieChart from "./charts/pieCategories";
import DonutChartCard from "./charts/pieItems";
import SimpleLineChart from "./charts/lineMonthly/simpleLine";
import {
  StatisticsContainer,
  TopContainer,
  TopItemsContainer,
  TopCategoriesContainer,
  MonthlyContainer,
  StatisticsHeaders,
} from "./styled";

const Statistics = () => {
  useTitle("Statistics");

  return (
    <StatisticsContainer>
      <TopContainer>
        <TopItemsContainer>
          <StatisticsHeaders>Top Items</StatisticsHeaders>
          <DonutChartCard />
        </TopItemsContainer>
        <TopCategoriesContainer>
          <StatisticsHeaders>Top Categories</StatisticsHeaders>
          <TwoSimplePieChart />
        </TopCategoriesContainer>
      </TopContainer>
      <MonthlyContainer>
        <StatisticsHeaders>Monthly Summary</StatisticsHeaders>
        <SimpleLineChart />
      </MonthlyContainer>
    </StatisticsContainer>
  );
};

export default Statistics;
