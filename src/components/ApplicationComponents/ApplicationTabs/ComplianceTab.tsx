import { useEffect, useRef, useState } from "react";
import { FiEye } from "react-icons/fi";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { sortSelction } from "../../../utils/constant";

type SortItem = {
  selected: boolean;
  option: string;
};

const ComplianceTab = () => {
  const [openSort, setOpenSort] = useState(false);
  const [sortData, setSortData] = useState<SortItem[]>(sortSelction);
  const selectRef = useRef<HTMLDivElement>(null);

  const updateSelected = (optionToUpdate: string) => {
    const updatedSortData = sortData.map((item) => {
      if (item.option === optionToUpdate) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });

    setSortData(updatedSortData);
  };

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpenSort(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="compliance"
      className="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 items-start justify-start"
    >
      <div className="w-full flex items-center justify-between gap-5">
        <h2 className="text-sm font-semibold text-dark">Resume</h2>
        <div className="flex items-center justify-end gap-4">
          <span className="text-dark cursor-pointer w-10 h-10 border border-[#ECECEC] shadow-selectShad flex items-center justify-center rounded-lg">
            <FiEye size={20} />
          </span>
          <span className="text-dark cursor-pointer w-10 h-10 border border-[#ECECEC] shadow-selectShad flex items-center justify-center rounded-lg">
            <LiaFileDownloadSolid size={20} />
          </span>
        </div>
      </div>
      <div className="w-full h-[901px] bg-[#F1F1F1] rounded"></div>
    </div>
  );
};

export default ComplianceTab;
