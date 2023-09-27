import { GrHomeRounded } from "react-icons/gr";
import { RxShare1 } from "react-icons/rx";
import { PiUsersThreeBold, PiCalendarCheckLight } from "react-icons/pi";

export const sidebarLink = [
  {
    text: "Home",
    icon: GrHomeRounded,
    to: "/",
  },
  {
    text: "User",
    icon: PiUsersThreeBold,
    to: "/",
  },
  {
    text: "Review Date",
    icon: PiCalendarCheckLight,
    to: "/",
  },
  {
    text: "Application",
    icon: RxShare1,
    to: "/application",
  },
  {
    text: "Opportunity",
    icon: RxShare1,
    to: "/opportunity",
  },
];
