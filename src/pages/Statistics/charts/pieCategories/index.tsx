import React, { useCallback, useContext, useEffect, useState } from "react";

import { PieChart, Pie, Tooltip } from "recharts";
import { Shopping } from "../../../../context";

const data01 = [
  { name: "Group A", value: 40, fill: "#84d88b" },
  { name: "Group B", value: 30, fill: "#d884c3" },
  { name: "Group C", value: 30, fill: "#bd84d8" },
  { name: "Group D", value: 20, fill: "#8884d8" },
];

type data = {
  name: string;
  value: number;
  fill: string;
};

const TwoSimplePieChart = () => {
  const { history } = useContext(Shopping);
  const [data, setData] = useState<data[]>([]);

  const getTopCategories = useCallback(() => {
    const histories = [...history];
    const categories = histories
      .map((item) => item.listItem)
      .flat()
      .map((item) => item.category)
      .sort();

    let count = 0;
    const newCategories = categories.map((item, index) => {
      if (item === categories[index - 1]) {
        count++;
      } else count = 0;
      return { name: item, value: count + 1 };
    });

    const topCategories = newCategories.map((item, index) =>
      item === newCategories[index - 1] ? null : "ok"
    );

    console.log(newCategories);
  }, [history]);

  useEffect(() => {
    getTopCategories();
  }, [getTopCategories]);

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={120}
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default TwoSimplePieChart;
