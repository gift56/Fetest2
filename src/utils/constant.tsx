import { GoHome, GoTag } from "react-icons/go";
import { RxShare1 } from "react-icons/rx";
import { BsHeart } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import {
  PiUsersThreeBold,
  PiCalendarCheckLight,
  PiNotebookLight,
} from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import { BiUserVoice } from "react-icons/bi";

export const sidebarLink = [
  {
    text: "Home",
    icon: GoHome,
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
    coverImage: "AS",
  },
  {
    id: "002020202030302002",
    name: "John Doe",
    nationality: "Bostom, USA",
    education: "Bachelor - MIT (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "003020202030302002",
    name: "Thomas Matt",
    nationality: "Edinburgh, UK",
    education: "Bachelor - Harvard University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "004020202030302002",
    name: "Kamilia Smith",
    nationality: "London, UK",
    education: "Bachelor - Boston University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "005020202030302002",
    name: "Roy Jade",
    nationality: "Cambridge,  UK",
    education: "Bachelor - Boston University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "006020202030302002",
    name: "Ahmed Salman",
    nationality: "New York, USA",
    education: "Bachelor - Boston University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "007020202030302002",
    name: "Aaliyah Sanderson",
    nationality: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "008020202030302002",
    name: "John Doe",
    nationality: "Bostom, USA",
    education: "Bachelor - MIT (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "009020202030302002",
    name: "Thomas Matt",
    nationality: "Edinburgh, UK",
    education: "Bachelor - Harvard University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "0010020202030302002",
    name: "Kamilia Smith",
    nationality: "London, UK",
    education: "Bachelor - Boston University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "0011020202030302002",
    name: "Roy Jade",
    nationality: "Cambridge,  UK",
    education: "Bachelor - Boston University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "0012020202030302002",
    name: "Ahmed Salman",
    nationality: "New York, USA",
    education: "Bachelor - Boston University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "0013020202030302002",
    name: "Jame Jade",
    nationality: "Cambridge,  UK",
    education: "Bachelor - Boston University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
  {
    id: "0014020202030302002",
    name: "Mohammed Salman",
    nationality: "New York, USA",
    education: "Bachelor - Boston University (2023 - 2023)",
    tag: ["#top_candidate", "#top_candidate"],
    experience: ["New York", "Marketing", "London"],
    coverImage: "AS",
  },
];

export const selectOptions = [
  {
    text: "Applied",
    totalNumber: "1745",
  },
  {
    text: "Shortlisted",
    totalNumber: "453",
  },
  {
    text: "Technical Interview",
    totalNumber: "123",
  },
  {
    text: "Opportunity Browsing",
    totalNumber: "223",
  },
  {
    text: "Video Interview I",
    totalNumber: "25",
  },
  {
    text: "Video Interview II",
    totalNumber: "25",
  },
  {
    text: "Video Interview III",
    totalNumber: "25",
  },
  {
    text: "Offer",
    totalNumber: "25",
  },
  {
    text: "Withdrawn",
    totalNumber: "25",
  },
];

export const moreInfoIcons = [
  { icon: GoTag },
  { icon: FiUserX, danger: true },
  { icon: FiUserCheck },
  { icon: BiUserVoice },
  { icon: HiOutlineEnvelope },
];

export const possibleFilter = [
  {
    title: "Personal Information",
  },
  {
    title: "Education",
  },
  {
    title: "Work Experience",
  },
  {
    title: "Activity Filter",
  },
  {
    title: "Advanced Filter",
  },
];
