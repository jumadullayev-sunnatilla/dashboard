import React from 'react';
import { IoWallet } from "react-icons/io5";

const Card = ({ title, amount, percentage, icon: Icon, iconBg }) => {
  return (
    <div className="w-[350px] p-[15px] bg-[#081638] flex items-center justify-between rounded-lg">
      <div>
        <h2 className="text-[18px] text-[#A0AEC0]">{title}</h2>
        <div className="flex items-center">
          <strong className="text-[20px] text-white">{amount}</strong>
          <span className="text-[15px] text-[#01B574]">{percentage}</span>
        </div>
      </div>
      <div
        className={`text-white text-[25px] p-[15px] rounded-xl ${iconBg || "bg-blue-600"}`}
      >
        {Icon ? <Icon /> : <IoWallet />}
      </div>
    </div>
  );
};

export default Card;
