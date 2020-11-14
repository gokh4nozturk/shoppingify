import React, { useCallback, useEffect, useState } from "react";
import { Pie, PieChart } from "recharts";
import { ProductType } from "../../../../context";
import { Card, ChartLabel, ChartLabelValue, ChartWrapper } from "./styled";

interface Props {
  topObjects: ProductType[];
}

type data = {
  name: string;
  value: number;
};

const DonutChartCard = ({ topObjects }: Props) => {
  const [active, setActive] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  const [data, setData] = useState<data[]>([]);

  const editData = useCallback(() => {
    const items = [...topObjects];
    const ass: data = Object.create({});
    items.map((item) => {
      return (ass.name = item.name);
    });

    setData([ass]);
  }, [topObjects]);

  const activeItem = data.find((obj) => obj.name === active);

  useEffect(() => {
    console.log(data);

    editData();
  }, []);

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
            fill="#292929"
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
