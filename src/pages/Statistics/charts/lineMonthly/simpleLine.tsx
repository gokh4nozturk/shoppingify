import React, { useCallback, useContext, useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Shopping } from "../../../../context";

const data2 = [
  { item: 24, name: "January" },
  { item: 13, name: "February" },
  { item: 98, name: "March" },
  { item: 39, name: "April" },
  { item: 48, name: "May" },
  { item: 38, name: "June" },
  { item: 43, name: "July" },
  { item: 24, name: "August" },
  { item: 13, name: "September" },
  { item: 98, name: "October" },
  { item: 39, name: "November" },
  { item: 48, name: "December" },
];

type data = {
  name: string;
  item: number;
};

const SimpleLineChart = () => {
  const { history } = useContext(Shopping);

  const [data, setData] = useState<data[]>([]);

  const fetchItemsMonthly = useCallback(() => {
    // editing history's data for statistics
    const histories = [...history];
    const objects = histories.map((item) => new Date(item.createdAt));

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const items = [...objects];
    let count = 0;

    const newMonths = items.map((item, index) => {
      if (item === items[index - 1]) {
        count++;
      } else count = 0;
      return { name: months[item.getMonth()], item: count + 1 };
    });

    setData(newMonths);
  }, [history]);

  useEffect(() => {
    fetchItemsMonthly();
  }, []);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data2}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="item"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;
