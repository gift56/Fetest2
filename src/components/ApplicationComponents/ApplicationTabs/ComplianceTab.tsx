import { FiEye } from "react-icons/fi";
import { LiaFileDownloadSolid } from "react-icons/lia";

const ComplianceTab = () => {
  return (
    <div
      id="compliance"
      className="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 items-start justify-start"
    >
      <div className="w-full flex items-center justify-between gap-5">
        <h2 className="text-sm font-semibold text-dark">Resume</h2>
        <div className="flex items-center justify-end gap-4">
          <span className="text-dark w-10 h-10 border border-[#ECECEC] shadow-selectShad flex items-center justify-center rounded-lg">
            <FiEye size={20} />
          </span>
          <span className="text-dark w-10 h-10 border border-[#ECECEC] shadow-selectShad flex items-center justify-center rounded-lg">
            <LiaFileDownloadSolid size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComplianceTab;
