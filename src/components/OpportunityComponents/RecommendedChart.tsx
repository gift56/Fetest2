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
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Qualified - Disqualified",
    },
  },
};

const labels = ["January", "Ferbuary", "March", "April", "May", "June", "July"];

const qualifiedData = [250, 750, 600, 400, 200, 300, 660];

const disqualifiedData = [250, 350, 200, 350, 200, 300, 560];

export const data: any = {
  labels,
  datasets: [
    {
      label: "Inflow",
      data: qualifiedData,
      borderColor: "rgb(251, 227, 142)",
      backgroundColor: "rgba(251, 227, 142, 0.70)",
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Outflow",
      data: disqualifiedData,
      borderColor: "rgb(177, 165, 255)",
      backgroundColor: "rgba(154, 137, 255, 0.70)",
      cubicInterpolationMode: "monotone",
    },
  ],
};

const RecommendedChart = () => {
  return (
    <div className="bg-white w-full border border-[#E7E8E7] rounded-2xl p-8 hidden lg:flex flex-col shadow-cardShad"></div>
  );
};

export default RecommendedChart;
