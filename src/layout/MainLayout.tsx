import { ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
  title: string;
}

const MainLayout = ({ children, title }: ChildrenProp) => {
  document.title = `${title}`;
  return <div>MainLayout</div>;
};

export default MainLayout;
