import { Gauge} from '@mui/x-charts/Gauge';
import React from 'react'

const Rate = () => {
  return (
    <>
    <div className='w-[350px] p-[15px] rounded-xl bg-[#0F1535]'>
        <h2 className='text-white text-[18px] mb-[4px]'>Satisfaction Rate</h2>
        <p className='text-[#A0AEC0] text-[12px] mb-[15px]'>From all projects</p>
        <Gauge
            className="mx-auto"
            width={200}
            height={100}
            value={60}
            startAngle={-90}
            endAngle={90}
            />
        <div className='bg-[#0c1e49] flex items-center justify-between rounded-xl text-white text-[20px] p-[20px]'>
            <p>0%</p>
            <p>95%</p>
            <p>100%</p>
        </div>
    </div>
    </>
  )
}

export default Rate