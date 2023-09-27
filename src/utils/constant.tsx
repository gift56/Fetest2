import { GrHomeRounded } from "react-icons/gr";
import { RxShare1 } from "react-icons/rx";
import { BsHeart } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import {
  PiUsersThreeBold,
  PiCalendarCheckLight,
  PiNotebookLight,
} from "react-icons/pi";

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
    icon: FaRegFileAlt,
    to: "/opportunity",
  },
  {
    text: "Note",
    icon: PiNotebookLight,
    to: "/",
  },
  {
    text: "Favorite",
    icon: BsHeart,
    to: "/",
  },
];

export const candidateData = [
  {
    id: "001020202030302002",
    name: "Aaliyah Sanderson",
    nationality: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
  },
];
