import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["January", "Ferbuary", "March", "April", "May", "June", "July"];

const qualifiedData = [250, 750, 600, 400, 440, 400, 660];

const disqualifiedData = [250, 350, 300, 350, 430, 380, 560];

export const data: any = {
  labels,
  datasets: [
    {
      label: "Qualified",
      data: qualifiedData,
      borderColor: "rgb(251, 227, 142)",
      backgroundColor: "rgba(251, 227, 142, 0.70)",
      cubicInterpolationMode: "nearest",
      fontStyle: "italic",
      borderWidth: 3,
    },
    {
      label: "Disqualified",
      data: disqualifiedData,
      borderColor: "rgb(177, 165, 255)",
      backgroundColor: "rgba(154, 137, 255, 0.70)",
      cubicInterpolationMode: "nearest",
      fontStyle: "italic",
      borderWidth: 3,
    },
  ],
};

const RecommendedChart = () => {
  return (
    <div className="bg-white w-full border border-[#E7E8E7] rounded-2xl p-8 hidden lg:flex flex-col shadow-cardShad">
      <Line data={data} options={options} />
    </div>
  );
};

export default RecommendedChart;
