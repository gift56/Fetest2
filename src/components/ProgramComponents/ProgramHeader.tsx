import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

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
      <div className="flex items-center w-[321px] h-10 gap-3 bg-white shadow-selectShad rounded-2xl text-primary"></div>
    </nav>
  );
};

export default ProgramHeader;