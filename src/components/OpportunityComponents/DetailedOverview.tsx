import { useEffect, useRef, useState } from "react";
import { PiSortDescendingBold, PiSortAscendingBold } from "react-icons/pi";

const DetailedOverview = () => {
  const [openSort, setOpenSort] = useState(false);
  const [sortedItem, setSortedItem] = useState("Opportunity Browsing");
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
      <div className="w-full flex items-center justify-between gap-6"></div>
    </div>
  );
};

export default DetailedOverview;
