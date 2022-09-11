import React from "react";
import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";

const Chart = () => {
  const data = [
    {
      name: "7 pm",
      temp: 48,
    },
    {
      name: "10 pm",
      temp: 40,
    },
    {
      name: "1 am",
      temp: 36,
    },
    {
      name: "4 am",
      temp: 22,
    },
    {
      name: "7 am",
      temp: 44,
    },
    {
      name: "10 am",
      temp: 35,
    },
    {
      name: "1 am",
      temp: 30,
    },
    {
      name: "4 am",
      temp: 40,
    },
  ];
  return (
    <div className="chart container">
      <ResponsiveContainer width="100%" aspect={6 / 1}>
        <AreaChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#ccc"
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#ffd300"
            strokeWidth={2}
            fill="#ffd300"
            fillOpacity={0.2}
            label={<CustomizedLabel />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomizedLabel = (props) => {
  const { x, y, value } = props;
  return (
    <text x={x} y={y} dy={-4} fill="#ccc" fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

export default Chart;
