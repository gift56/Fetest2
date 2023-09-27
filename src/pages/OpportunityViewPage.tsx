import MainLayout from "../layout/MainLayout";

const OpportunityViewPage = () => {
  return (
    <MainLayout title="FE OverView Task Test - Opportunity Application View">
      <div className="w-full h-screen flex flex-col items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <div className="w-full items-center justify-between gap-5">
          <h2 className="text-base font-semibold text-primary md:text-xl">
            Opportunity Overview
          </h2>
        </div>
      </div>
    </MainLayout>
  );
};

export default OpportunityViewPage;
