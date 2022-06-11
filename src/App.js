import { useEffect, useState } from "react";
import { Chart } from "./components/Chart";
import { LineChart } from "./components/LineChart";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const fetchInflation = async () => {
      const res = await fetch("https://www.statbureau.org/get-data-json?country=turkey");
      const data = await res.json();
      setChartData({
        labels: data.map((item) => item.Month),
        datasets: [
          {
            label: "Inflation in Turkey",
            data: data.map((item) => item.InflationRate),
            backgroundColor: [
              "#ffbb11",
              "#C0C0C0",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
          }
        ]
      });
    };
    fetchInflation();
  }, []);

  const [chartData, setChartData] = useState({});

  return (
    <div className="App">
      <Chart chartData={chartData} />
      <LineChart chartData={chartData} />
    </div>
  );
}
