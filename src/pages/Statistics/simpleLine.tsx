import React from "react";

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

const data = [
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

const SimpleLineChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
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
