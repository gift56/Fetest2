import { useState } from "react";
import { ProgramHeader } from "../components";
import MainLayout from "../layout/MainLayout";
import { GoSearch } from "react-icons/go";
import { PiWarningCircleLight } from "react-icons/pi";
import { candidateData, possibleFilter } from "../utils/constant";
import { FaRegFileAlt } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

interface Data {
  id: string;
  name: string;
  nationality: string;
  education: string;
  tag: string[];
  experience: string[];
  coverImage: string;
}

const ProgramViewPage = () => {
  const [data] = useState(candidateData);
  const [search, setSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState<Data[]>([]);

  const handleItemClick = (item: Data) => {
    const updatedSelectedItems = [...selectedItems, item];
    setSelectedItems(updatedSelectedItems);
  };

  const keys: (keyof Data)[] = [
    "name",
    "nationality",
    "education",
    "tag",
    "experience",
  ];

  const searchTerm = (data: Data[]) => {
    return data.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        if (typeof value === "string") {
          return value.toLowerCase().includes(search);
        } else if (
          Array.isArray(value) &&
          value.every((v) => typeof v === "string")
        ) {
          return value.some((v) => v.toLowerCase().includes(search));
        }
        return false;
      })
    );
  };

  const searchedDatas = searchTerm(data);

  return (
    <MainLayout title="FE OverView Task Test - Program Application View">
      <div className="w-full h-screen flex flex-col items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <ProgramHeader />
        <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6">
          <div className="w-full lg:flex-[1] flex flex-col gap-6 items-start justify-start lg:sticky lg:top-6">
            <div className="w-full h-12 bg-white border border-[#F3F3F3] rounded-lg flex items-center justify-between">
              <button
                type="submit"
                className="px-3 h-full flex items-center justify-center text-inputgray"
              >
                <GoSearch className="w-5 h-5" />
              </button>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-full text-sm font-normal text-inputgray outline-none border-none"
                placeholder="Serach by name, edu, exp or #tag"
              />
              <button
                type="button"
                className="pr-3 h-full flex items-center justify-center text-inputgray"
              >
                <PiWarningCircleLight className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full flex flex-col items-start justify-start bg-white rounded-lg overflow-hidden">
              <div className="p-4 flex items-center justify-between gap-4 w-full border-b">
                <h2 className="text-sm font-medium text-dark">Filters</h2>
                <p className="text-xs font-normal text-dark">
                  {selectedItems.length} Selected
                </p>
              </div>
              {possibleFilter.map((item, i) => (
                <div
                  className="p-4 flex items-center group justify-between gap-4 w-full border-b last:border-none hover:bg-hovergray transition-all duration-300 cursor-pointer"
                  key={i}
                >
                  <div className="flex items-center justify-start gap-2">
                    <FaRegFileAlt className="w-4 h-4" />
                    <span className="text-sm font-normal text-dark">
                      {item.title}
                    </span>
                  </div>
                  <BiChevronDown className="w-6 h-6 group-last:hidden" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:flex-[2.5] bg-white flex flex-col items-start justify-start rounded-lg h-screen overflow-y-auto overflow-x-hidden">
            <div className="p-4 flex items-center justify-between gap-4 w-full border-b">
              <div className="flex items-center justify-start gap-2 select-none">
                <input type="checkbox" />
                <p className="text-sm font-semibold text-primary">
                  {data.length} Candidates
                </p>
              </div>
              <div className="flex items-center justify-end gap-6 select-none">
                <p className="text-sm font-medium text-primary">Qualified</p>
                <p className="text-sm font-medium text-dark flex items-center gap-2">
                  <span>Task</span>
                  <span className="w-fit py-1 px-3 text-[#22215B] text-xs font-normal bg-[#F7F8FD] rounded-3xl">
                    25
                  </span>
                </p>
                <p className="text-sm font-medium text-dark flex items-center gap-2">
                  <span>Disqualified</span>
                  <span className="w-fit py-1 px-3 text-[#22215B] text-xs font-normal bg-[#F7F8FD] rounded-3xl">
                    78
                  </span>
                </p>
              </div>
            </div>
            {searchedDatas.map((item) => (
              <div
                onClick={() => handleItemClick(item)}
                className="p-4 flex flex-col items-center w-full border-b last:border-none hover:bg-hovergray/20 transition-all duration-300 cursor-pointer"
                key={item.id}
              >
                <div className="flex items-center justify-start gap-10 w-full">
                  <input type="checkbox" />
                  <div className="select-none w-20 h-20 rounded-full flex items-center justify-center bg-[#EDF4FF] text-[#D0E1FF]">
                    <span>{item.coverImage}</span>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <h2 className="text-sm font-semibold text-black">
                      {item.name}
                    </h2>
                    <p className="text-xs font-medium text-black">
                      {item.nationality}
                    </p>
                    <p className="text-xs font-normal text-black">
                      {item.education}
                    </p>
                    <p className="text-xs font-normal text-primary flex items-center justify-start gap-4">
                      {item.tag.map((item, i) => (
                        <span key={i}>{item}</span>
                      ))}
                    </p>
                    <p className="text-xs font-medium text-[#037092] flex items-center justify-start gap-4">
                      {item.experience.map((item, i) => (
                        <span
                          key={i}
                          className="bg-[#F3FAFC] py-2 px-4 rounded-xl"
                        >
                          {item}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProgramViewPage;
