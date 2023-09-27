import MainLayout from "../layout/MainLayout";
import { BiChevronDown } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";

const OpportunityViewPage = () => {
  return (
    <MainLayout title="FE OverView Task Test - Opportunity Application View">
      <div className="w-full h-screen flex flex-col items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <div className="w-full flex items-center justify-between gap-5">
          <h2 className="text-base font-semibold text-primary md:text-xl">
            Opportunity Overview
          </h2>
          <div className="flex items-center justify-end gap-6">
            <span className="flex items-center gap-3 text-sm font-medium text-dark">
              <span>London Internship Program</span>
              <BiChevronDown className="w-4 h-4" />
            </span>
            <span className="w-fit py-1 px-4 flex items-center justify-end gap-2 bg-[#F0F3FB] rounded-2xl">
              <LuCalendarDays />
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OpportunityViewPage;
