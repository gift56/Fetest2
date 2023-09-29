import { useEffect, useRef, useState } from "react";
import { additionalQuestionsData, sortSelction } from "../../../utils/constant";

type SortItem = {
  selected: boolean;
  option: string;
};

type AdditionalQuestion = {
  cat: string;
  healine: string;
  content: string;
  reply?: string;
  img?: string;
  choices?: string[];
};

const VideoTab = () => {
  const [openSortQuestion, setOpenSortQuestion] = useState(false);
  const [sortData, setSortData] = useState<SortItem[]>(sortSelction);
  const sortQuestionRef = useRef<HTMLDivElement>(null);

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
        sortQuestionRef.current &&
        !sortQuestionRef.current.contains(event.target as Node)
      ) {
        setOpenSortQuestion(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const statusColor = (status: string) => {
    if (status === "Paragraph" || status === "Short Answer") {
      return "text-[#F1CC04] bg-[#FFFBE4]";
    } else if (status === "Video") {
      return "bg-[#EEF2FF] text-[#9EB8FF]";
    } else if (status === "Number") {
      return "bg-[#FFF6F7] text-[#E48A8F]";
    } else if (status === "Multiple Choice") {
      return "bg-[#F8FAFF] text-[#8DB97F]";
    } else if (status === "Dropdown Select") {
      return "bg-[#F2FCFF] text-[#82E0FF]";
    }
  };
  const statusCheckColor = (status: string) => {
    if (status === "Paragraph" || status === "Short Answer") {
      return "bg-[#F1CC04]";
    } else if (status === "Video") {
      return "bg-[#9EB8FF]";
    } else if (status === "Number") {
      return "bg-[#E48A8F]";
    } else if (status === "Multiple Choice") {
      return "bg-[#8DB97F]";
    } else if (status === "Dropdown Select") {
      return "bg-[#82E0FF]";
    }
  };

  const filteredQuestions = additionalQuestionsData.filter((question) =>
    sortData.some((item) => item.selected && item.option === question.cat)
  );

  return (
    <div
      id="video"
      className="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 items-start justify-start"
    >
      <div className="w-full flex items-center justify-between gap-5">
        <h2 className="text-sm font-semibold text-dark">
          Additional Questions
        </h2>
        <div className="w-[200px] h-10 border border-[#EBEBEB] rounded-lg relative flex items-center justify-start select-none cursor-pointer">
          <span
            onClick={() => setOpenSortQuestion(true)}
            className="text-sm font-normal text-dark w-full h-full flex items-center justify-start px-3 rounded-2xl"
          >
            Sort
          </span>
          <div
            ref={sortQuestionRef}
            className={`${
              openSortQuestion
                ? "scale-x-100 opacity-100 top-12"
                : "scale-x-0 opacity-0 top-0"
            } w-full absolute bg-white flex flex-col items-start justify-start rounded-bl-2xl rounded-br-2xl shadow-selectShad z-10 transition-all duration-300`}
          >
            {sortSelction.map((item) => (
              <div
                key={item.option}
                className="w-full items-center flex justify-start gap-4 hover:bg-hovergray cursor-pointer transition-all duration-300 text-dark py-4 px-4"
              >
                <input
                  type="checkbox"
                  id={item.option}
                  defaultChecked={item.selected}
                />
                <label
                  onClick={() => updateSelected(item.option)}
                  htmlFor={item.option}
                  className="text-sm font-nor text-dark"
                >
                  {item.option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-5">
        {filteredQuestions.map((item, i) => (
          <div
            key={i}
            className="w-full flex flex-col items-start justify-start"
          >
            <div className="border-b w-[90%] ml-auto">
              <span
                className={`w-fit px-4 pt-2 rounded-tl-md rounded-tr-md ${statusColor(
                  item.cat
                )} text-sm font-normal`}
              >
                {item.cat}
              </span>
            </div>
            <div className="w-full flex items-start justify-start gap-5">
              <div className="">
                <span
                  className={`w-6 h-6 block rounded-full p-5 ${statusCheckColor(
                    item.cat
                  )}`}
                ></span>
              </div>
              <div className="flex-grow flex items-start justify-start flex-col gap-1">
                <h3 className="text-sm font-light text-black">
                  {item.content}
                </h3>
                {item.reply && (
                  <p className="bg-[#F8FAFF] rounded-2xl p-3 text-[#216C84]">
                    {item.reply}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTab;
