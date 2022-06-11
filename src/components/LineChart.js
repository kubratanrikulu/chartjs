import { Line } from "react-chartjs-2";

export const LineChart = ({ chartData }) => {
  return (
    <div>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Inflation Rate"
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }
        }}
      />
    </div>
  );
};