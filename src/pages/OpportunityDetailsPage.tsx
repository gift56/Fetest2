import MainLayout from "../layout/MainLayout";
import { BiChevronDown } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { PiTrendUpLight, PiTrendDown } from "react-icons/pi";
import {
  opportunityData,
  opportunityDisqulified,
  opportunityOverviewsData,
  opportunityQualified,
  opportunityRecommendData,
  opportunityStage,
} from "../utils/constant";
import { DetailedOverview, RecommendedChart } from "../components";
import { useParams } from "react-router-dom";

const OpportunityDetailsPage = () => {
  const params = useParams();

  const data = opportunityOverviewsData.find((item) => item.id === params.id);
  console.log(data);

  return (
    <MainLayout
      title={`FE OverView Task Test - Program Overview - ${data?.name}`}
    >
      <div className="w-full h-screen flex flex-col items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <div className="w-full flex items-center justify-between gap-5">
          <h2 className="text-base font-semibold text-dark md:text-xl">
            Program Overview - ${data?.name}
          </h2>
          <div className="flex items-center justify-end gap-6">
            <span className="flex items-center gap-3 text-sm font-medium text-dark cursor-pointer">
              <span>London Internship Program</span>
              <BiChevronDown className="w-4 h-4" />
            </span>
            <span className="w-fit py-1 px-4 flex items-center select-none cursor-pointer text-sm font-normal justify-end gap-2 bg-[#F0F3FB] rounded-2xl">
              <LuCalendarDays className="w-4 h-4" />
              <span className="font-Inter">01 Jan 2023 - 31 July 2023</span>
              <BiChevronDown className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OpportunityDetailsPage;
