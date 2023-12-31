import { IoMdClose } from "react-icons/io";
import { RxPlusCircled } from "react-icons/rx";

const ApplicationUserProfileDetail = () => {
  const tag = ["#top_candidate", "#marketing_june"];
  const experience = ["New York", "Marketing", "London"];

  return (
    <div className="w-full bg-white flex items-start justify-between gap-4 flex-col lg:flex-row p-4 rounded-2xl">
      <div className="flex-shrink">
        <img
          src="/interviewImage.png"
          alt="application_image"
          className="w-[88px] h-[88px] object-contain rounded-full"
        />
      </div>
      <div className="flex-grow flex flex-col items-start justify-start gap-4">
        <div className="w-full flex lg:items-center justify-between gap-5 flex-col lg:flex-row items-start relative">
          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="flex items-center gap-4 text-sm font-semibold text-black">
              <span>Aaliyah Sanderson</span>
              <span className="text-xs font-medium text-[#037092] flex items-center justify-start gap-4">
                {experience.map((item, i) => (
                  <span key={i} className="bg-[#F3FAFC] py-2 px-4 rounded-full">
                    {item}
                  </span>
                ))}
              </span>
            </h2>
            <p className="flex items-center justify-start text-xs font-light text-black">
              <span className="border-r border-black pr-2">Saudi Arabia</span>
              <span className="border-r border-black px-2">
                aaliyahs@gmail.com
              </span>
              <span className="px-3">+00 000 000 0000</span>
            </p>
          </div>
          <div className="w-fit py-2 px-4 flex items-center bg-white shadow-selectShad gap-8 rounded-full absolute right-0">
            <h3 className="text-sm font-medium text-dark">Overall Score</h3>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F3FAFC] text-sm text-[#6B6B6B] font-medium">
              7
            </span>
          </div>
        </div>
        <div className="w-full flex lg:items-center justify-between gap-5 flex-col lg:flex-row items-start relative">
          <span className="text-xs font-medium text-[#808EA3] flex items-center justify-start gap-4">
            {tag.map((item, i) => (
              <span
                key={i}
                className="bg-[#F5F8FF] py-2 px-4 rounded-full flex items-center jus gap-3"
              >
                <span>{item}</span>
                <span className="cursor-pointer">
                  <IoMdClose />
                </span>
              </span>
            ))}
            <span className="flex items-center justify-start gap-2 cursor-pointer text-[#9AA6AC]">
              <RxPlusCircled className="w-4 h-4" />
              <span>Add tag</span>
            </span>
          </span>
          <span className="text-[#A8A8A8] text-xs font-light">
            Applied on 12 June 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default ApplicationUserProfileDetail;
