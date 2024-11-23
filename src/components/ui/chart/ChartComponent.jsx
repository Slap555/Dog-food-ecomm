import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { useFetchDaywiseOrders } from "../../../pages/admin/dashboard.api";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const DaywiseOrdersChart = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const { data, isLoading, isError } = useFetchDaywiseOrders(month, year);

  const chartData = {
    labels: data ? data.map((d) => d.day) : [],
    datasets: [
      {
        label: "Orders",
        data: data ? data.map((d) => d.totalOrders) : [],
        fill: false,
        borderColor: "#4CAF50",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Ensures chart maintains a responsive aspect ratio
    scales: {
      x: {
        title: {
          display: true,
          text: "Days of the Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Orders",
        },
        beginAtZero: true,
      },
    },
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to fetch data</p>;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-base font-semibold">Order Monthwise</h1>
        <div className="flex gap-2">
          <select
            id="year"
            value={year}
            onChange={handleYearChange}
            className="p-2 border rounded"
          >
            {Array.from({ length: 5 }, (_, i) => currentYear - i).map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
          <select
            id="month"
            value={month}
            onChange={handleMonthChange}
            className="p-2 border rounded"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((monthValue) => (
              <option key={monthValue} value={monthValue}>
                {new Date(0, monthValue - 1).toLocaleString("default", {
                  month: "long",
                })}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="h-[300px] md:h-[400px]">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DaywiseOrdersChart;
