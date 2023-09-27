import { ReactNode } from "react";
import { Sidebar } from "../components";

interface ChildrenProp {
  children: ReactNode;
  title: string;
}

const MainLayout = ({ children, title }: ChildrenProp) => {
  document.title = `${title}`;

  return (
    <main className="w-full h-screen flex items-start justify-start bg-[#F9FAFF]">
      <nav aria-label="sidebar" className="flex-shrink">
        <Sidebar />
      </nav>
    </main>
  );
};

export default MainLayout;
