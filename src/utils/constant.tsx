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
  {
    id: "0015020202030302002",
    name: "Alice Smith",
    nationality: "British",
    education: "Master's in Engineering",
    tag: ["#less", "#top_candidate"],
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

export const opportunityData = [
  {
    headline: "Applied",
    total: "3,122",
    previousNo: "1590",
    status: true,
  },
  {
    headline: "Offer",
    total: "183",
    previousNo: "71",
    status: true,
  },
  {
    headline: "Hired",
    total: "98",
    previousNo: "167",
    status: false,
  },
];

export const opportunityStage = [
  "Applied",
  "Recommended",
  "Interview",
  "Offer",
  "Hired",
];
export const opportunityQualified = ["3122", "2164", "443", "183", "118"];
export const opportunityDisqulified = ["1445", "958", "1721", "260", "65"];

export const opportunityRecommendData = [
  {
    headline: "Recommended",
    total: "2,164",
    previousNo: "90",
    status: true,
  },
  {
    headline: "Interview",
    total: "443",
    previousNo: "90",
    status: true,
  },
];

export const possibleSort = [
  {
    text: "Applied",
  },
  {
    text: "Recommended",
  },
  {
    text: "Interview",
  },
  {
    text: "Offer",
  },
  {
    text: "Hired",
  },
  {
    text: "Rejected",
  },
];

export const detailedOverviewTableColumns = [
  {
    field: "name",
    header: "Opportunity Name",
  },
  {
    field: "status",
    header: "Status",
  },
  {
    field: "applied",
    header: "Applied",
  },
  {
    field: "recommended",
    header: "Recommended",
  },
  {
    field: "interview",
    header: "Interview",
  },
  {
    field: "offer",
    header: "Offer",
  },
  {
    field: "hired",
    header: "Hired",
  },
];

export const opportunityOverviewsData = [
  {
    id: "010203920228",
    name: "Google",
    details: [
      {
        headline: "Applied",
        total: "95",
      },
      {
        headline: "Recommended",
        total: "57",
      },
      {
        headline: "Interview",
        total: "39",
      },
      {
        headline: "Offer",
        total: "33",
      },
      {
        headline: "Hired",
        total: "15",
      },
      {
        headline: "Total Rejected",
        total: "60",
      },
    ],
    tableData: [
      {
        name: "UX Internship",
        status: ["Active", "Disqualified"],
        applied: ["20", "7"],
        recommended: ["17", "4"],
        interview: ["4", "1"],
        offer: ["3", "1"],
        hired: ["1", "1"],
      },
      {
        name: "Art Internship",
        status: ["Active", "Disqualified"],
        applied: ["44", "24"],
        recommended: ["32", "4"],
        interview: ["21", "7"],
        offer: ["19", "8"],
        hired: ["10", "3"],
      },
    ],
  },
  {
    id: "020203920228",
    name: "Microsoft",
    details: [
      {
        headline: "Applied",
        total: "34",
      },
      {
        headline: "Recommended",
        total: "42",
      },
      {
        headline: "Interview",
        total: "22",
      },
      {
        headline: "Offer",
        total: "12",
      },
      {
        headline: "Hired",
        total: "4",
      },
      {
        headline: "Total Rejected",
        total: "19",
      },
    ],
    tableData: [
      {
        name: "UX Internship",
        status: ["Active", "Disqualified"],
        applied: ["20", "7"],
        recommended: ["17", "4"],
        interview: ["4", "1"],
        offer: ["3", "1"],
        hired: ["1", "1"],
      },
      {
        name: "Art Internship",
        status: ["Active", "Disqualified"],
        applied: ["44", "24"],
        recommended: ["32", "4"],
        interview: ["21", "7"],
        offer: ["19", "8"],
        hired: ["10", "3"],
      },
    ],
  },
];

export const tabLinks = [
  { id: "", text: "Profile" },
  { id: "", text: "Video" },
  { id: "", text: "Evaluation" },
  { id: "", text: "Placement" },
  { id: "", text: "Compliance" },
  { id: "", text: "Notes" },
  { id: "", text: "Notes" },
  { id: "", text: "More" },
];
