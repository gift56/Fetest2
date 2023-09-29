import { useEffect, useRef, useState } from "react";
import { sortSelction } from "../../../utils/constant";

type SortItem = {
  selected: boolean;
  option: string;
};

const VideoTab = () => {
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
      id="video"
      className="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 items-start justify-start"
    >
      <div className="w-full flex items-center justify-between gap-5">
        <h2 className="text-sm font-semibold text-dark">
          Additional Questions
        </h2>
        <div className="w-[200px] h-10 border border-[#EBEBEB] rounded-lg px-3 relative flex items-center justify-start select-none cursor-pointer">
          <span
            onClick={() => setOpenSort(!openSort)}
            className="text-sm font-normal text-dark"
          >
            Sort
          </span>
          <div
            ref={selectRef}
            className={`${
              openSort
                ? "scale-x-100 opacity-100 top-12"
                : "scale-x-0 opacity-0 top-0"
            } w-full absolute bg-white flex flex-col items-start justify-start rounded-bl-2xl rounded-br-2xl shadow-selectShad z-10 transition-all duration-300`}
          >
            {sortSelction.map((item) => (
              <div
                onClick={() => updateSelected(item.option)}
                key={item.option}
                className="w-full items-center rounded-2xl  flex justify-between gap-4 shadow-selectShad hover:bg-hovergray cursor-pointer transition-all duration-300 text-dark py-4 px-4 "
              >
                <input
                  type="checkbox"
                  id={item.option}
                  defaultChecked={item.selected}
                />
                <label htmlFor={item.option} className="text-sm font-nor text-dark">{item.option}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTab;
