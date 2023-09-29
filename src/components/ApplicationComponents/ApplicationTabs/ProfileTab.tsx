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
  ];
  return (
    <div
      id="profile"
      className="w-full bg-white rounded-2xl p-5 flex flex-col items-start justify-start"
    >
      <h2 className="text-sm font-semibold text-dark">Personal Information</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-start"></div>
    </div>
  );
};

export default ProfileTab;
