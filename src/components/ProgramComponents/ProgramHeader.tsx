import { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiUserVoice } from "react-icons/bi";
import { GoTag } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import { selectOptions } from "../../utils/constant";

const ProgramHeader = () => {
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

  return (
    <nav
      aria-label="programheading"
      className="w-full flex items-start justify-between gap-8"
    >
      <div className="flex flex-col items-start justify-start">
        <h2 className="text-base font-semibold text-primary md:text-xl">
          London Internship Program
        </h2>
        <span className="text-sm text-dark font-normal">London</span>
      </div>
      <div className="flex flex-col items-center justify-start w-[321px] h-10 gap-3 bg-white shadow-selectShad rounded-2xl relative">
        <div
          onClick={() => setOpenSelect(!openSelect)}
          className="w-full flex items-center justify-between cursor-pointer h-full px-4 text-primary"
        >
          <span className="text-base font-medium">{selectedItem}</span>
          <BiChevronDown className="w-5 h-5" />
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
      <div className="flex items-center justify-end gap-4">
        <span className="shadow-iconShad bg-white border-[0.5px] border-[#ECECEC] text-[#444444] w-10 h-10 flex items-center justify-center rounded-lg">
          <GoTag className="w-5 h-5" />
        </span>
        <span className="shadow-iconShad bg-white border-[0.5px] border-[#ECECEC] text-[#A80000] w-10 h-10 flex items-center justify-center rounded-lg">
          <FiUserX className="w-5 h-5" />
        </span>
        <span className="shadow-iconShad bg-white border-[0.5px] border-[#ECECEC] text-[#444444] w-10 h-10 flex items-center justify-center rounded-lg">
          <FiUserCheck className="w-5 h-5" />
        </span>
        <span className="shadow-iconShad bg-white border-[0.5px] border-[#ECECEC] text-[#444444] w-10 h-10 flex items-center justify-center rounded-lg">
          <BiUserVoice className="w-5 h-5" />
        </span>
        <span className="shadow-iconShad bg-white border-[0.5px] border-[#ECECEC] text-[#444444] w-10 h-10 flex items-center justify-center rounded-lg">
          <HiOutlineEnvelope className="w-5 h-5" />
        </span>
      </div>
    </nav>
  );
};

export default ProgramHeader;
