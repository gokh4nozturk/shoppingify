import React, { useCallback, useContext, useEffect, useState } from "react";
import { Pie, PieChart } from "recharts";
import { Shopping } from "../../../../context";
import { Card, ChartLabel, ChartLabelValue, ChartWrapper } from "./styled";

type data = {
  name: string;
  value: number;
  fill: string;
};

const DonutChartCard = () => {
  const { history } = useContext(Shopping);
  const [active, setActive] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  const [data, setData] = useState<data[]>([]);

  const fetchTopItems = useCallback(() => {
    const histories = [...history];

    // editing history's data for statistics
    const objects = histories
      .map((item) => item.listItem)
      .flat()
      .sort((a, b) => a.count - b.count)
      .reverse()
      .slice(0, 3);

    const items = [...objects];
    const ass = items.map((item) => {
      return {
        name: item.name,
        value: item.count,
        fill: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
      };
    });

    setData(ass);
  }, [history]);

  const activeItem = data.find((obj) => obj.name === active);

  useEffect(() => {
    fetchTopItems();
  }, [fetchTopItems]);

  return (
    <Card>
      <ChartWrapper>
        <ChartLabel isVisible={mouseOver}>
          {activeItem && activeItem.name}
          <ChartLabelValue>{active !== "" && activeItem.value}</ChartLabelValue>
        </ChartLabel>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            startAngle={90}
            endAngle={450}
            strokeWidth={0}
            innerRadius={95}
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
