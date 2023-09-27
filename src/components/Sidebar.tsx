import { useState } from "react";
import { sidebarLink } from "../utils/constant";
import { NavLink } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      className={`${
        collapse ? "w-[192px]" : "w-[72px]"
      } transition-all duration-300 h-screen px-4 py-5 shadow-sideShad sticky top-0 flex flex-col items-center justify-between overflow-x-hidden overflow-y-auto`}
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
              className={`flex items-center gap-4 py-3 rounded-lg first:bg-hovergray first:text-primary hover:bg-hovergray transition-all duration-300 relative ${
                collapse
                  ? "justify-start w-full px-2"
                  : "justify-center w-fit px-3"
              }`}
            >
              <span>
                <item.icon className="w-6 h-6" />
              </span>
              <span
                className={`absolute ${
                  collapse
                    ? "opacity-100 scale-100 relative"
                    : "opacity-0 scale-0"
                } transition-all duration-300`}
              >
                {item.text}
              </span>
            </NavLink>
          ))}
          <button
            onClick={() => {
              setCollapse(!collapse);
            }}
            className={`flex items-center gap-4 py-3 rounded-lg hover:bg-hovergray transition-all duration-300 relative ${
              collapse
                ? "justify-start w-full px-2"
                : "justify-center w-fit px-3"
            }`}
          >
            <BiChevronLeft
              className={`w-7 h-7 ${
                collapse ? "rotate-0" : "rotate-180"
              } transition-all duration-300`}
            />
            <span
              className={`absolute ${
                collapse
                  ? "opacity-100 scale-100 relative"
                  : "opacity-0 scale-0"
              } transition-all duration-300`}
            >
              {collapse ? "Collapse" : "Expand"}
            </span>
          </button>
        </nav>
      </ul>
      <div className="w-full flex flex-col items-center justify-center gap-10">

      </div>
    </div>
  );
};

export default Sidebar;
