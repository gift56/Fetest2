import { FormEvent, useState } from "react";
import { ProgramHeader } from "../components";
import MainLayout from "../layout/MainLayout";
import { GoSearch } from "react-icons/go";
import { PiWarningCircleLight } from "react-icons/pi";

const ProgramViewPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(searchTerm);

  return (
    <MainLayout title="FE OverView Task Test - Program Application View">
      <div className="w-full h-screen flex flex-col items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <ProgramHeader />
        <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6">
          <div className="w-full lg:flex-[1] flex flex-col gap-5 items-start justify-start">
            <form
              onSubmit={handleSubmit}
              className="w-full h-12 bg-white border border-[#F3F3F3] rounded-lg flex items-center justify-between"
            >
              <button
                type="submit"
                className="px-3 h-full flex items-center justify-center text-inputgray"
              >
                <GoSearch className="w-5 h-5" />
              </button>
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-full text-sm font-normal text-inputgray outline-none border-none"
                placeholder="Serach by name, edu, exp or #tag"
              />
              <button
                type="button"
                className="pr-3 h-full flex items-center justify-center text-inputgray"
              >
                <PiWarningCircleLight className="w-5 h-5" />
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
