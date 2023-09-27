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
            <NavLink
              to={item.to}
              key={i}
              className="w-full flex items-center justify-center gap-4 py-3 px-6 rounded-lg hover:bg-hovergray transition-all duration-300"
            >
              <span>
                <item.icon className="w-6 h-6" />
              </span>
              <span>{item.text}</span>
            </NavLink>
          ))}
        </nav>
      </ul>
    </div>
  );
};

export default Sidebar;
