import { useState, useRef, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { candidateData, possibleFilter, selectOptions } from "../utils/constant";
import { BiChevronDown } from "react-icons/bi";
import { GoSearch } from "react-icons/go";

interface Data {
  id: string;
  name: string;
  nationality: string;
  education: string;
  tag: string[];
  experience: string[];
  coverImage: string;
}

const ApplicationViewPage = () => {
  const [data] = useState(candidateData);
  const [search, setSearch] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Opportunity Browsing");
  const selectRef = useRef<HTMLDivElement>(null);

  const openSelection = (item: string) => {
    setSelectedItem(item);
    setOpenSelect(false);
  };

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpenSelect(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <MainLayout title="FE Task Test - Application Overview">
      <div className="w-full h-screen flex flex-col lg:flex-row items-start justify-start gap-6 py-4 px-6 overflow-y-auto overflow-x-hidden">
        <div className="w-full lg:flex-[1] flex flex-col gap-3 items-start justify-start lg:sticky lg:top-6">
          <div className="flex flex-col items-center justify-start w-[321px] h-12 gap-3 bg-white shadow-selectShad rounded-lg relative">
            <div
              onClick={() => setOpenSelect(!openSelect)}
              className="w-full flex items-center justify-between cursor-pointer h-full px-4 text-[#384A69]"
            >
              <span className="text-base font-medium">{selectedItem}</span>
              <BiChevronDown className="w-6 h-5 border-l-2" />
            </div>
            <div
              ref={selectRef}
              className={`${
                openSelect
                  ? "scale-x-100 opacity-100 top-12"
                  : "scale-x-0 opacity-0 top-0"
              } w-full absolute bg-white flex flex-col items-start justify-start rounded-bl-2xl rounded-br-2xl shadow-selectShad z-10 transition-all duration-300`}
            >
              {selectOptions.map((item) => (
                <div
                  onClick={() => openSelection(item.text)}
                  key={item.text}
                  className={`w-full border-b items-center last:rounded-bl-2xl flex last:rounded-br-2xl last:border-none justify-between gap-4 shadow-selectShad hover:bg-hovergray hover:text-primary cursor-pointer transition-all duration-300 text-dark py-4 px-4 ${
                    selectedItem === item.text
                      ? "bg-hovergray text-primary font-medium"
                      : " font-normal"
                  }`}
                >
                  <span className="text-base">{item.text}</span>
                  <span
                    className={`text-sm w-fit py-1 px-2 rounded-2xl ${
                      selectedItem === item.text
                        ? "bg-[#D1DDFF] text-primary"
                        : " bg-[#F8F8F8] text-[#444444]"
                    }`}
                  >
                    {item.totalNumber}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:flex-[2.5] flex flex-col items-start justify-start h-screen overflow-y-auto overflow-x-hidden"></div>
      </div>
    </MainLayout>
  );
};

export default ApplicationViewPage;
