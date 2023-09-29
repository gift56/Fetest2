import { FaRegCircleUser } from "react-icons/fa6";
import { BsCalendar2Event } from "react-icons/bs";
import { LuUserSquare, LuUser } from "react-icons/lu";

const ProfileTab = () => {
  const profileData = [
    {
      icon: FaRegCircleUser,
      headline: "Nationality",
      detail: "Sri Lankan",
    },
    {
      icon: LuUserSquare,
      headline: "National ID",
      detail: "0000000000",
    },
    {
      icon: LuUser,
      headline: "Gender",
      detail: "Female",
    },
    {
      icon: BsCalendar2Event,
      headline: "Date of Birth",
      detail: "00-00-0000",
    },
  ];

  return (
    <div
      id="profile"
      className="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 items-start justify-start"
    >
      <h2 className="text-sm font-semibold text-dark">Personal Information</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-start">
        {profileData.map((item, i) => (
          <div key={i} className="w-full flex items-center justify-start gap-5">
            <span className="text-dark">
              <item.icon size={20} />
            </span>
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-[#5F5F5F] text-sm font-normal">{item.headline}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileTab;
