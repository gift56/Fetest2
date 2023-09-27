import { FormEvent, useState } from "react";
import { ProgramHeader } from "../components";
import MainLayout from "../layout/MainLayout";
import { GoSearch } from "react-icons/go";

const ProgramViewPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <MainLayout title="FE OverView Task Test - Program Application View">
      <div className="w-full h-screen flex flex-col items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <ProgramHeader />
        <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6">
          <div className="w-full lg:flex-[1] flex flex-col gap-5 items-start justify-start">
            <form
              onSubmit={handleSubmit}
              className="w-full h-12 bg-white border border-[#F3F3F3] rounded-lg flex items-center justify-between gap-5"
            >
              <button type="submit" className="px-3 h-full flex items-center justify-center text-inputgray">
                <GoSearch className="w-4 h-4" />
              </button>
            </form>
          </div>
          <div className="w-full lg:flex-[2.5]"></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProgramViewPage;
