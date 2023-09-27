import { ProgramHeader } from "../components";
import MainLayout from "../layout/MainLayout";

const ProgramViewPage = () => {
  return (
    <MainLayout title="FE OverView Task Test - Program Application View">
      <div className="w-full h-screen flex flex-col items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <ProgramHeader />
        <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6">
          <div className="w-full lg:flex-[1] bg-primary p-3"></div>
          <div className="w-full lg:flex-[2.5] bg-red-500 p-3"></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProgramViewPage;
