import React, { useCallback, useContext, useEffect, useState } from "react";
import { useTitle } from "react-use";
import { Shopping } from "../../context";
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
  const { history } = useContext(Shopping);
  const [topItems, setTopItems] = useState([]);
  const [topCategories, setTopCategories] = useState([]);

  const fetchTopItems = useCallback(() => {
    const data = history.map((item) => item.listItem).slice();
    console.log([...data]);
  }, [history]);

  useEffect(() => {
    fetchTopItems();
  });

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
