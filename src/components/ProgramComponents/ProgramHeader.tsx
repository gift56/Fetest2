import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { selectOptions } from "../../utils/constant";

const ProgramHeader = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Opportunity Browsing");
  const selctRef = useRef<HTMLDivElement>(null);

  const openSelection = (item: string) => {
    setSelectedItem(item);
    setOpenSelect(false);
  };

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        selctRef.current &&
        !selctRef.current.contains(event.target as Node)
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
          className={`w-full absolute bg-white flex flex-col items-start justify-start rounded-bl-2xl rounded-br-2xl top-12 shadow-selectShad z-10`}
        >
          {selectOptions.map((item) => (
            <div
              key={item.text}
              className={`w-full border-b flex items-center last:rounded-bl-2xl last:rounded-br-2xl last:border-none justify-between gap-4 shadow-selectShad hover:bg-hovergray hover:text-primary cursor-pointer transition-all text-dark py-4 px-4 ${
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
    </nav>
  );
};

export default ProgramHeader;
