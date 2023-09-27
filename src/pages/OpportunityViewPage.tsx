import MainLayout from "../layout/MainLayout";
import { BiChevronDown } from "react-icons/bi";

const OpportunityViewPage = () => {
  return (
    <MainLayout title="FE OverView Task Test - Opportunity Application View">
      <div className="w-full h-screen flex flex-col items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <div className="w-full items-center justify-between gap-5">
          <h2 className="text-base font-semibold text-primary md:text-xl">
            Opportunity Overview
          </h2>
          <div className="flex items-center justify-end gap-6">
            <span className="flex items-center gap-3 text-sm font-medium text-dark">
              <span>London Internship Program</span>
              <BiChevronDown className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OpportunityViewPage;
