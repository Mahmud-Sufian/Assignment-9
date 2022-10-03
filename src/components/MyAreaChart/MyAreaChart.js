import React, { useEffect } from "react";
import { 
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";

const MyAreaChart = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []); 

  return (
    <div>
        <div className="w-2/3 mx-auto mt-10">
        <h1 className="text-3xl font-semibold text-center mb-10 underline">My Bar Chart</h1>

      <BarChart width={960} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sell" fill="red" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </div>

    <div className="w-2/3 mx-auto mt-40">
        <h1 className="text-3xl font-semibold text-center mb-10 underline">My Line Chart</h1>
        <LineChart width={800} height={350} data={chartData}>
            <Line dataKey='sell' fill='red'></Line>
            <Line dataKey='revenue' fill='red'></Line>
            <Line dataKey='investment' fill='red'></Line>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <XAxis dataKey='month'></XAxis>
            <YAxis></YAxis>
        </LineChart>
    </div>
    </div>
  );
};

export default MyAreaChart;
