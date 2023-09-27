import { useState } from "react";
import { sidebarLink } from "../utils/constant";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      className={`w-[72px] transition-all duration-300 h-screen px-4 py-5 shadow-sideShad sticky top-0 flex flex-col items-center justify-between overflow-x-hidden overflow-y-auto`}
    >
      <ul className="w-full flex flex-col items-center justify-center gap-10">
        <div className="w-10 h-10 bg-hashgray rounded-full"></div>
        <nav
          aria-label="navigate"
          className="flex w-full flex-col items-center gap-6"
        >
          {sidebarLink.map((item, i) => (
            <NavLink to={item.to} key={i} className="w-full flex items-center justify-center"></NavLink>
          ))}
        </nav>
      </ul>
    </div>
  );
};

export default Sidebar;
