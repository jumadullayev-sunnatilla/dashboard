import { Gauge } from "@mui/x-charts";
import React from "react";

const Tracking = () => {
  return (
    <div className="bg-[#0F1535] w-[550px] p-[20px] rounded-lg">
      <h2 className="text-white mb-[41px]">Referral Tracking</h2>
      <div className="flex items-center">
        <div className="flex flex-col gap-[30px]">
          <div className="w-[200px] p-[15px] rounded-xl  bg-[#050B2A]">
            <p className="text-[14px] text-[#A0AEC0]">Invited</p>
            <strong className="text-[18px] text-white">145 people</strong>
          </div>
          <div className="w-[200px] p-[15px] rounded-xl bg-[#050B2A]">
            <p className="text-[14px] text-[#A0AEC0]">Bonus</p>
            <strong className="text-[18px] text-white">1,465</strong>
          </div>
        </div>
        <Gauge width={300} height={250} value={60} />
      </div>
    </div>
  );
};

export default Tracking;
