import { useState, useRef, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { candidateData, selectOptions, tabLinks } from "../utils/constant";
import { BiChevronDown } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { PiWarningCircleLight } from "react-icons/pi";
import { ApplicationUserProfileDetail } from "../components";
import { BsChevronRight } from "react-icons/bs";

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
  const [tab, setTab] = useState("Profile");
  const [search, setSearch] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    text: "Opportunity Browsing",
    totalNumber: "2325",
  });
  const selectRef = useRef<HTMLDivElement>(null);
  const tabSliderRef = useRef<HTMLUListElement>(null);
  const slideRight = () => {
    if (tabSliderRef.current) {
      const slider = tabSliderRef.current;
      let maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft < maxScrollLeft) {
        slider.scrollLeft = slider.scrollLeft + 40;
      } else {
        slider.scrollLeft = 0;
      }
    }
  };

  const openSelection = (item: any) => {
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
        <div className="w-full lg:flex-[1] flex flex-col gap-3 items-start justify-start lg:h-[94vh] lg:sticky lg:top-0">
          <div className="flex flex-col items-center justify-start w-full py-2 gap-3 bg-white shadow-selectShad rounded-lg relative">
            <div
              onClick={() => setOpenSelect(!openSelect)}
              className="w-full flex items-center justify-between cursor-pointer h-full px-4 text-[#384A69]"
            >
              <span className="pr-3">
                <span className="text-sm font-semibold w-8 h-8 flex items-center justify-center bg-[#F4F7FB] uppercase rounded-full">
                  SIP
                </span>
              </span>
              <span className="text-base font-medium flex items-center justify-between w-full px-2 border-x-2">
                <span>{selectedItem.text}</span>
                <span>{selectedItem.totalNumber}</span>
              </span>
              <span>
                <BiChevronDown className="w-6 h-6" />
              </span>
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
                  onClick={() => openSelection(item)}
                  key={item.text}
                  className={`w-full border-b items-center last:rounded-bl-2xl flex last:rounded-br-2xl last:border-none justify-between gap-4 shadow-selectShad hover:bg-hovergray hover:text-primary cursor-pointer transition-all duration-300 text-dark py-4 px-4 ${
                    selectedItem.text === item.text
                      ? "bg-hovergray text-primary font-medium"
                      : " font-normal"
                  }`}
                >
                  <span className="text-base">{item.text}</span>
                  <span
                    className={`text-sm w-fit py-1 px-2 rounded-2xl ${
                      selectedItem.text === item.text
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
          <div className="w-full flex items-center justify-between gap-2">
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
            <div className="w-14 h-12 flex items-center justify-center bg-white shadow-selectShad rounded-lg">
              <img
                src="/filterIcon.png"
                alt="filter-icon"
                className="w-5 h-5"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-4 justify-start rounded-lg overflow-y-auto overflow-x-hidden">
            <div className="p-4 flex items-center justify-between gap-4 w-full bg-white">
              <div className="border-r-2 pr-2">
                <input type="checkbox" />
              </div>
              <div className="flex items-center justify-end gap-6 select-none">
                <p className="text-sm font-medium text-primary flex items-center justify-start gap-1 border-r-2 pr-2">
                  <span>Qualified</span>
                  <span className="w-fit bg-[#EDF4FF] py-1 px-2 rounded-full">
                    247
                  </span>
                </p>
                <p className="text-sm font-medium text-dark flex items-center gap-2 border-r-2 pr-2">
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
            <div className="flex flex-col items-start justify-start gap-6 w-full bg-white">
              {searchedDatas.map((item) => (
                <div
                  className="p-4 flex flex-col items-center w-full border-b last:border-none hover:bg-hovergray/20 transition-all duration-300 cursor-pointer"
                  key={item.id}
                >
                  <div className="flex items-center justify-start gap-4 w-full">
                    <input type="checkbox" />
                    <div className="select-none w-14 h-14 rounded-full flex items-center justify-center bg-[#EDF4FF] text-[#D0E1FF]">
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
        <div className="w-full lg:flex-[2] flex flex-col items-start justify-start overflow-x-hidden">
          <ApplicationUserProfileDetail />
          <div className="w-full relative h-full">
            <ul
              ref={tabSliderRef}
              className="w-[720px] h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative py-6"
            >
              {tabLinks.map((item) => (
                <li
                  key={item}
                  className={`text-sm font-medium px-8 py-2 relative inline-block cursor-pointer ${
                    item === tab
                      ? "text-primary border-b-2 border-primary"
                      : "text-dark"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <span
              onClick={slideRight}
              className={`absolute w-10 h-10 bg-white/50 top-[50%] flex items-center z-10 justify-center text-[#AEACAC] right-0 rounded-lg cursor-pointer transition-all`}
            >
              <BsChevronRight size={23} className="ml-1" />
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplicationViewPage;
