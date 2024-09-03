"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "@/lib/@recharts";
import data from "@/content/analytics";

const AnalyticsChart = () => {
  return (
    <div className=" border-2 border-slate-100 rounded p-4">
      <h3 className="text-2xl font-semibold">Analytics For This Year</h3>
      <p className="text-gray-500 text-xs mb-5">Views Per Month</p>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart width={1100} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;
