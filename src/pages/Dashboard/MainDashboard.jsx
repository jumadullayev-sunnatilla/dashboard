import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { IoCardSharp, IoBuild } from "react-icons/io5";
import { useStore } from "@/zustand"; // Corrected import for Zustand store

const MainDashboard = () => {
  const logout = useStore((state) => state.logout); // Access logout from Zustand store
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout action
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex">
      <div
        id="dashboard-sidebar"
        className="w-[290px] h-screen bg-slate-900 p-5 sticky top-0 left-0 overflow-auto text-white"
      >
        <p className="text-center text-2xl font-bold mb-[31px]">
          VISION UI FREE
        </p>
        <hr className="w-[200px] mb-[20px] ml-[23px]" />
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                `p-3 mb-2 rounded-md font-[400] flex items-center gap-2 text-[20px] leading-[14px] ${
                  isActive ? "bg-blue-600" : ""
                }`
              }
              to="dashboard"
            >
              <FaHome className="text-20px text-blue-600 rounded-sm" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `p-3 mb-2 rounded-md font-[400] flex items-center gap-2 text-[20px] leading-[14px] ${
                  isActive ? "bg-blue-600" : ""
                }`
              }
              to="table"
            >
              <IoIosStats className="text-20px text-blue-600 rounded-sm" />
              Table
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `p-3 mb-2 rounded-md font-[400] flex items-center gap-2 text-[20px] leading-[14px] ${
                  isActive ? "bg-blue-600" : ""
                }`
              }
              to="biling"
            >
              <IoCardSharp className="text-20px text-blue-600 rounded-sm" />
              Biling
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `p-3 mb-2 rounded-md font-[400] flex items-center gap-2 text-[20px] leading-[14px] ${
                  isActive ? "bg-blue-600" : ""
                }`
              }
              to="rtl"
            >
              <IoBuild className="text-20px text-blue-600 rounded-sm" />
              RTL
            </NavLink>
          </li>
          <li>
            <button
              className="p-3 mb-2 rounded-md font-[400] flex items-center gap-2 text-[20px] leading-[14px] bg-blue-600 hover:bg-blue-700"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainDashboard;
