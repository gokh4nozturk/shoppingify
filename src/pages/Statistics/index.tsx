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
  const [topObjects, setTopObjects] = useState([]);

  const fetchTopItems = useCallback(() => {
    let histories = [...history];
    // editing history's data for statistics
    const objects = histories
      .map((item) => item.listItem)
      .flat()
      .sort((a, b) => a.count - b.count)
      .reverse()
      .slice(0, 4);

    setTopObjects(objects);
  }, [history]);

  useEffect(() => {
    fetchTopItems();
  }, []);

  return (
    <StatisticsContainer>
      <TopContainer>
        <TopItemsContainer>
          <StatisticsHeaders>Top Items</StatisticsHeaders>
          <DonutChartCard topObjects={topObjects} />
        </TopItemsContainer>
        <TopCategoriesContainer>
          <StatisticsHeaders>Top Categories</StatisticsHeaders>
          <TwoSimplePieChart topObjects={topObjects} />
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
