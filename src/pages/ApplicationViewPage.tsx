import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { candidateData } from "../utils/constant";
import { BiChevronDown } from "react-icons/bi";
import { GoSearch } from "react-icons/go";

interface Data {
  id: string;
  name: string;
  nationality: string;
  education: string;
  tag: string[];
  experience: string[];
  coverImage: string;
}

const ApplicationViewPage = () => {
  return (
    <MainLayout title="FE Task Test - Application Overview">
      ApplicationViewPage
    </MainLayout>
  );
};

export default ApplicationViewPage;
