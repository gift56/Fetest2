import { TbBriefcase2 } from "react-icons/tb";

const PlacementTab = () => {
  return (
    <div
      id="placement"
      className="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 items-start justify-start"
    >
      <h2 className="text-sm font-semibold text-dark">Work Experience</h2>
      <div className="w-full flex flex-col gap-6 items-start justify-start">
        {[0, 1].map((item, i) => (
          <div
            key={i}
            className="w-full border-b py-5 flex items-center justify-start gap-5"
          >
            <span className="text-dark w-10 h-10 border border-[#ECECEC] flex items-center justify-center rounded-lg">
              <TbBriefcase2 size={20} />
            </span>
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-dark font-medium text-sm">
                Cyber Security Intern
              </h4>
              <h2 className="text-black font-normal text-sm flex items-center justify-start">
                <span className=" pr-2">Coop Training</span>
                <span className="text-[#B8B8B8] font-light px-3 border-x">
                  Saudi Arabia
                </span>
                <span className="text-[#B8B8B8] font-light pl-3">
                  Jan 2022 - Jan 2023
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementTab;
