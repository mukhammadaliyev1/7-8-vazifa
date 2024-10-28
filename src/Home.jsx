import React from 'react'
import { PiCoinsThin } from "react-icons/pi";
import { RiSendPlaneFill } from "react-icons/ri";
import { PiChartLineFill } from "react-icons/pi";
import { BiSolidBell } from "react-icons/bi";
import Convertor from './Convertor';
function Home() {
  return (
    <div className=''>

          <div className='text-center  text-yellow-50'>
            <h1 className='text-4xl font-bold'>1 USD to EUR - Convert US Dollars to Euros</h1>
            <p className='text-3xl mt-4 text-gray-100'>Xe Currency Converter</p>
          </div>

          <div className='w-[1000px] bg-white p-4 mx-auto rounded-lg mt-10 '>
          <div className=' bg-inherit border rounded-xl p-4 border-blue-300 flex flex-wrap justify-between'>
 
   <button className='w-56 p-2 font-bold  flex items-center justify-center gap-2 text-xs bg-slate-700 text-white  rounded-3xl  hover:border-blue-600 '> <PiCoinsThin />Convert </button>
   <button className='w-56 p-2 font-bold flex items-center justify-center gap-2  text-xs text-gray-400  rounded-3xl  hover:border-blue-600 hover:bg-slate-100 '> <RiSendPlaneFill/> Send </button>
   <button className='w-56 p-2 font-bold flex items-center justify-center gap-2  text-xs text-gray-400  rounded-3xl  hover:border-blue-600 hover:bg-slate-100 '>   <PiChartLineFill/> Charts </button>
   <button className='w-56 p-2 font-bold flex items-center justify-center gap-2  text-xs text-gray-400  rounded-3xl  hover:border-blue-600 hover:bg-slate-100 '> <BiSolidBell/> Alerts </button>




          
</div>

<div>
  
<Convertor/>

</div>
          </div>
         
    </div>
  )
}

export default Home