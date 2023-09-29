import { useState, useRef, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { candidateData, possibleFilter } from "../utils/constant";
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
      <div className="w-full h-screen flex flex-col lg:flex-row items-start justify-start gap-6 py-8 px-6 overflow-y-auto overflow-x-hidden">
        <div className="w-full lg:flex-[1] flex flex-col gap-6 items-start justify-start lg:sticky lg:top-6"></div>
        <div className="w-full lg:flex-[2.5] flex flex-col items-start justify-start h-screen overflow-y-auto overflow-x-hidden"></div>
      </div>
    </MainLayout>
  );
};

export default ApplicationViewPage;
