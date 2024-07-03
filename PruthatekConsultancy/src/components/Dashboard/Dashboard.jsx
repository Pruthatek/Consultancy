import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-full bg-black/90 h-[500px] pt-[100px]' >
        <p className='text-[40px] text-white font-euclid font-semibold text-center pb-10 '>Admin Dashboard</p>
    <div className='flex justify-center items-center gap-x-10 '>
      <Link to="/uploadjob" className='bg-white text-black text-[22px] w-fit h-fit px-5 py-3 rounded-[12px] flex justify-center items-center font-medium font-euclid '>
        Upload Job
      </Link>
      <div className='bg-white text-black text-[22px] w-fit h-fit px-5 py-3 rounded-[12px] flex justify-center items-center font-medium font-euclid '>
       All Jobs
      </div>
      </div>
    </div>
  )
}

export default Dashboard
