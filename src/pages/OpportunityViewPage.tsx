import MainLayout from "../layout/MainLayout";
import { BiChevronDown } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { PiTrendUpLight, PiTrendDown } from "react-icons/pi";
import { opportunityData, opportunityDisqulified, opportunityQualified, opportunityStage } from "../utils/constant";
import { RecommendedChart } from "../components";

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
                <div
                  key={i}
                  className="w-full bg-white shadow-cardShad border border-[#F5F5F5] p-4 flex flex-col items-start justify-start gap-3 rounded-2xl"
                >
                  <h2 className="text-sm font-medium text-dark">
                    {item.headline}
                  </h2>
                  <h1 className="text-base md:text-xl font-medium text-dark">
                    {item.total}
                  </h1>
                  <div className="flex flex-col items-start w-full gap-2">
                    <p className="text-sm font-normal text-dark">
                      Previous Period
                    </p>
                    <div className="flex items-center justify-start gap-2">
                      <span className="text-xs font-normal text-dark">
                        {item.previousNo}
                      </span>
                      <span
                        className={`${
                          item.status ? "bg-[#F0F6FF]" : "bg-[#FFF3F0]"
                        } flex items-center gap-1 text-xs font-normal text-dark py-1 px-2 rounded-2xl`}
                      >
                        {item.status ? <PiTrendUpLight /> : <PiTrendDown />}
                        <span>15</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full">
              <RecommendedChart />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col items-start justify-end gap-4">
            <div className="w-full bg-white shadow-cardShad border border-[#F5F5F5] p-4 flex flex-col items-start justify-start gap-3 rounded-2xl">
              <h2 className="text-sm font-medium text-dark">
                Total Candidate Flow
              </h2>
              <h1 className="text-base font-medium md:text-xl text-dark">
                4,567
              </h1>
              <div className="w-full flex items-center select-none">
                <div className="w-[78%] flex flex-col items-start justify-start gap-2">
                  <div className="w-full h-2 bg-[#D0F2CA] rounded-tl-lg rounded-bl-lg"></div>
                  <span className="text-[#C2C2C2] font-light text-xs">
                    Qualified 78%
                  </span>
                </div>
                <div className="w-[22%] flex flex-col items-start justify-start gap-2">
                  <div className="w-full h-2 bg-[#FFE0E0] rounded-tr-lg rounded-br-lg"></div>
                  <span className="text-[#C2C2C2] font-light text-xs">
                    Disqualified 22%
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-4 md:flex-row md:justify-between">
                <div className="w-full flex flex-col items-start justify-start gap-3">
                  <h3 className="text-sm font-medium text-dark">Stage</h3>
                  <ul className="flex flex-col items-start justify-start gap-3">
                    {opportunityStage.map((item) => (
                      <li key={item} className="text-sm font-light text-dark">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full flex flex-col md:flex-row items-start justify-end gap-3">
                  <div className="w-full flex flex-col items-end justify-end gap-3">
                    <h3 className="text-sm font-medium text-dark">Qualified</h3>
                    <ul className="flex flex-col items-end justify-end gap-3">
                      {opportunityQualified.map((item) => (
                        <li key={item} className="text-sm font-light text-dark">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                
                  <div className="w-full flex flex-col items-end justify-end gap-3">
                    <h3 className="text-sm font-medium text-dark">Disqualified</h3>
                    <ul className="flex flex-col items-end justify-end gap-3">
                      {opportunityDisqulified.map((item) => (
                        <li key={item} className="text-sm font-light text-dark">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OpportunityViewPage;
