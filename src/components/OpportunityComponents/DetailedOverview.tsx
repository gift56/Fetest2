import { useEffect, useRef, useState } from "react";
import {
  PiSortDescendingBold,
  PiSortAscendingBold,
  PiWarningCircleLight,
} from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { possibleSort } from "../../utils/constant";

const DetailedOverview = () => {
  const [openSort, setOpenSort] = useState(false);
  const [sortedItem, setSortedItem] = useState("Sort by");
  const [search, setSearch] = useState("");
  const sortRef = useRef<HTMLDivElement>(null);

  const openSelectionSort = (item: string) => {
    setSortedItem(item);
    setOpenSort(false);
  };

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setOpenSort(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-start justify-start w-full gap-6">
      <div className="w-full flex items-center justify-between gap-6">
        <div className="flex-1">
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
              placeholder="Search by employer name"
            />
            <button
              type="button"
              className="pr-3 h-full flex items-center justify-center text-inputgray"
            >
              <PiWarningCircleLight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-4">
          <div className="w-full flex flex-col items-center justify-start h-12 gap-3 bg-white shadow-selectShad rounded-lg relative border border-[#D8DFEB]">
            <div
              onClick={() => setOpenSort(!openSort)}
              className="w-full flex items-center justify-between cursor-pointer h-full px-4 text-dark"
            >
              <span className="text-base font-medium">{sortedItem}</span>
              <span className="border-l pl-3">
                {openSort ? (
                  <PiSortAscendingBold className="w-5 h-5" />
                ) : (
                  <PiSortDescendingBold className="w-5 h-5" />
                )}
              </span>
            </div>
            <div
              ref={sortRef}
              className={`${
                openSort
                  ? "scale-x-100 opacity-100 top-12"
                  : "scale-x-0 opacity-0 top-0"
              } w-full absolute bg-white flex flex-col items-start justify-start rounded-bl-2xl rounded-br-2xl shadow-selectShad z-10 transition-all duration-300`}
            >
              {possibleSort.map((item) => (
                <div
                  onClick={() => openSelectionSort(item.text)}
                  key={item.text}
                  className={`w-full items-center last:rounded-bl-2xl flex last:rounded-br-2xl justify-between gap-4 hover:bg-hovergray hover:text-primary cursor-pointer transition-all duration-300 text-dark py-4 px-4 ${
                    sortedItem === item.text
                      ? "bg-hovergray text-primary font-medium"
                      : " font-normal"
                  }`}
                >
                  <span className="text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="outline-none text-sm font-semibold text-primary w-full flex items-center justify-center h-12 gap-3 bg-white shadow-selectShad rounded-lg border border-[#D8DFEB]"
          >
            Export All As CSV
          </button>
        </div>
      </div>
      <div className="w-full bg-white h-[80vh] p-6 rounded-2xl overflow-x-hidden overflow-y-auto flex flex-col items-start justify-start gap-5"></div>
    </div>
  );
};

export default DetailedOverview;
