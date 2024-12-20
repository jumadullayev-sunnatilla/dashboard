import React from "react";
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import Card from "@/components/Card";
import { IoWallet } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Rate from "@/components/Rate";
import Tracking from "@/components/Tracking";
import Linechart from "@/components/Linechart";
import BarGraph from "@/components/BarGraph";
const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-[20px]">
        <p className=" text-[18px]">Pages/Dashboard</p>
        <div className="flex items-center gap-[18px]">
          <div className="relative">
            <IoSearchSharp className="absolute text-[#A0AEC0] text-[20px] top-[12px] left-[10px]" />
            <input
              type="text"
              className="w-[200px] rounded-xl bg-[#0F1535] text-[#A0AEC0] p-[10px] outline-none pl-[35px]"
              placeholder="Type here..."
            />
          </div>
          <button className="text-[#A0AEC0] flex items-center gap-[10px] text-[18px]">
            <IoPerson />
            Sign in
          </button>
          <IoMdSettings className="text-[#A0AEC0] text-[18px]" />
          <IoIosNotifications className="text-[#A0AEC0] text-[18px]" />
        </div>
      </div>
      <div className="flex items-center justify-between mb-[23px]">
        <Card
          title="Today’s Money"
          amount="$53,000"
          percentage="+55%"
          icon={IoWallet}
          iconBg="bg-blue-600"
        />
        <Card
          title="Today’s Users"
          amount="2,300"
          percentage="+5%"
          icon={FaGlobe}
          iconBg="bg-blue-600"
        />
        <Card
          title="New Clients"
          amount="+3,052"
          percentage="+55%"
          icon={IoDocumentTextOutline}
          iconBg="bg-blue-600"
        />
        <Card
          title="Total Sales"
          amount="$173,000"
          percentage="+8%"
          icon={FaCartShopping}
          iconBg="bg-blue-600"
        />
      </div>
      <div className="flex justify-between ">
        <Rate />
        <Tracking />
      </div>
      <div className="flex justify-between mt-[30px]">
        <Linechart />
        <BarGraph />
      </div>
    </div>
  );
};

export default Dashboard;
