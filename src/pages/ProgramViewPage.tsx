import { ProgramHeader } from "../components";
import MainLayout from "../layout/MainLayout";

const ProgramViewPage = () => {
  return (
    <MainLayout title="FE OverView Task Test - Program Application View">
      <div className="w-full h-screen flex flex-col items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <ProgramHeader />
        <div className="w-full flex items-start justify-start gap-6">
          
        </div>
      </div>
    </MainLayout>
  );
};

export default ProgramViewPage;
