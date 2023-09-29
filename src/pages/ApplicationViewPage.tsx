import MainLayout from "../layout/MainLayout";
import { BiChevronDown } from "react-icons/bi";

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
