import React, { useState } from "react";
import { Pie, PieChart } from "recharts";
import { Card, ChartLabel, ChartLabelValue, ChartWrapper } from "./styled";

const data = [
  { name: "Lost", value: 672, fill: "#292929" },
  { name: "Strong", value: 462, fill: "#b239dc" },
  { name: "Moderate", value: 127, fill: "#028ffb" },
  { name: "Low", value: 41, fill: "#68d4a2" },
];

const DonutChartCard = () => {
  const [active, setActive] = useState("");
  const [mouseOver, setMouseOver] = useState(false);

  const activeItem = data.find((obj) => obj.name === active);

  return (
    <Card>
      <ChartWrapper>
        <ChartLabel isVisible={mouseOver}>
          {activeItem && activeItem.name}
          <ChartLabelValue>{active !== "" && activeItem.value}</ChartLabelValue>
        </ChartLabel>
        <PieChart width={250} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            startAngle={90}
            endAngle={450}
            strokeWidth={0}
            data={data}
            innerRadius={100}
            outerRadius={125}
            onMouseEnter={(e) => {
              setActive(e.name);
              setMouseOver(true);
            }}
            onMouseLeave={(e) => {
              setMouseOver(false);
            }}
          />
        </PieChart>
      </ChartWrapper>
    </Card>
  );
};
export default DonutChartCard;
