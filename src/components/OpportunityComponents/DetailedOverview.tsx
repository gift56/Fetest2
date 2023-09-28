import { useEffect, useRef, useState } from "react";
import {
  PiSortDescendingBold,
  PiSortAscendingBold,
  PiWarningCircleLight,
} from "react-icons/pi";
import { GoSearch } from "react-icons/go";

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
              placeholder="Serach by name, edu, exp or #tag"
            />
            <button
              type="button"
              className="pr-3 h-full flex items-center justify-center text-inputgray"
            >
              <PiWarningCircleLight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default DetailedOverview;
