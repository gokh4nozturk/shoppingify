import React from "react";

import { PieChart, Pie, Tooltip } from "recharts";
import { ProductType } from "../../../../context";

const data01 = [
  { name: "Group A", value: 40, fill: "#84d88b" },
  { name: "Group B", value: 30, fill: "#d884c3" },
  { name: "Group C", value: 30, fill: "#bd84d8" },
  { name: "Group D", value: 20, fill: "#8884d8" },
];

interface Props {
  topObjects: ProductType[];
}

const TwoSimplePieChart = ({ topObjects }: Props) => {
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
