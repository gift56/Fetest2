import MainLayout from "../layout/MainLayout";
import { BiChevronDown } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { opportunityData } from "../utils/constant";

const OpportunityViewPage = () => {
  return (
    <MainLayout title="FE OverView Task Test - Opportunity Application View">
      <div className="w-full h-screen flex flex-col items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <div className="w-full flex items-center justify-between gap-5">
          <h2 className="text-base font-semibold text-primary md:text-xl">
            Opportunity Overview
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
        <div className="w-full flex items-start justify-between flex-col lg:flex-row gap-6">
          <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-4">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
              {opportunityData.map((item, i) => (
                <div key={i} className="w-full bg-white shadow-cardShad border border-[#F5F5F5] p-4 flex flex-col items-start justify-start gap-3 rounded-2xl"></div>
              ))}
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col items-start justify-end gap-4"></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OpportunityViewPage;
