import React, { createContext, useState, useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { BsBookmarksFill, BsFillTagFill } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";

import { GiHamburgerMenu, GiPowerButton } from "react-icons/gi";
import { FiList } from "react-icons/fi";
import { AiTwotoneSetting } from "react-icons/ai";
import { BsBookmarks } from "react-icons/bs";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { OpenBar } from "../App";
import useOnClickOutside from "../hooks/useOnClickOutside";
import useIsMobile from "../hooks/isMobile";
const menuItems = [
  {
    path: "/",
    name: "Dashboard",
    icon: <AiOutlineHome />,
    iconClass: "text-yellow-400",
  },
  {
    path: "/pos",
    name: "Pos",
    icon: <BsFillTagFill />,
    iconClass: "text-red-500",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: <BsHandbagFill />,
    iconClass: "text-[#00FF00]",
  },
  {
    path: "/orderStatus",
    name: "Order Status Screen",
    icon: <FiList />,
    iconClass: "text-orange-500",
  },
  {
    path: "/expense",
    name: "Expense",
    icon: <BsBookmarksFill />,
    iconClass: "text-pink-600",
  },
  {
    path: "/customers",
    name: "Customers",
    icon: <FaUser />,
    iconClass: "text-pink-500",
  },
  {
    path: "/services",
    name: "Services",
    icon: <BsFillTagFill />,
    iconClass: "text-blue-500",
  },
  {
    path: "/reorts",
    name: "Reports",
    icon: <BsFillFileEarmarkBarGraphFill />,
    iconClass: "text-orange-500",
  },
  {
    path: "/tools",
    name: "Tools",
    icon: <AiTwotoneSetting />,
    iconClass: "text-orange-500",
  },
  {
    path: "/logout",
    name: "Logout",
    icon: <GiPowerButton />,
    iconClass: "text-gray-400",
  },
];
const SideBar = () => {
  const { open, setOpen } = useContext(OpenBar);
  const location = useLocation();

  const divRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { pathname } = location;

  useOnClickOutside(divRef, () => {
    if (!isMobile) return;
    setOpen?.(false);
  });
  return (
    <div
      className={[
        "container w-fit h-screen py-2 pl-2 md:static  absolute  top-0 transition-transform duration-300 left-0 flex ",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0 ",
      ].join(" ")}
      ref={divRef}
    >
      <div
        className={`${
          open ? "w-60" : "w-16"
        } duration-500  rounded-lg   bg-white`}
      >
        <>
          <div className="flex items-center justify-between   p-6">
            <div className="flex items-center gap-2">
              <div className="text-2xl">
                <BiImageAdd />
              </div>
              <h1
                className={`text-xs font-semibold duration-300 ${
                  !open && "opacity-0 translate-x-5"
                }`}
              >
                LAUNDRY
              </h1>
            </div>
            <GiHamburgerMenu
              onClick={() => {
                setOpen?.((curr) => !curr);
              }}
              className="cursor-pointer ml-auto md:hidden "
            ></GiHamburgerMenu>
          </div>
          <div className=" p-3">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link className={""} to={item.path} key={index}>
                  <div
                    className={[
                      "flex items-center p-3 group hover:bg-blue-400 hover:text-white transition-colors duration-300 rounded-lg",
                      isActive ? "bg-blue-500 text-white" : "",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        item.iconClass,
                        "group-hover:text-white transition-colors duration-300 ",
                        isActive ? "text-[#fff]" : "",
                      ].join(" ")}
                    >
                      {item.icon}
                    </div>

                    <div className="ml-4">
                      <p
                        className={`text-sm font-semibold  duration-300 whitespace-pre ${
                          !open && "opacity-0 translate-x-10"
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      </div>
    </div>
  );
};
export default SideBar;
