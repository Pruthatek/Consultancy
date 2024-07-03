import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = ({active,setActive}) => {
  return (
    <div className='relative z-40 font-euclid'>
      <div className='w-full lg:h-full md:h-[600px] h-[500px] relative '>
        <div className='absolute bg-gradient-to-b top-0 left-0 right-0 bottom-0 from-black to-transparent flex flex-col justify-start items-center'>
          <div className='md:mt-40 mt-[100px]   flex flex-col items-center'>
          <p className='font-bold lg:text-[46px] md:text-[32px] text-[24px] text-white text-center px-4 md:px-0 '>Find The Right People For Your Team</p>
          <p className='font-medium lg:text-[24px] md:[18px] text-[14px] mt-4 text-white text-center px-4 md:px-0 '>Connecting Talent with Opportunity, Fuelling Innovation with Top Tech Minds.</p>
          <Link to={"/searchjobs"} onClick={()=>setActive("Search Jobs")} className='md:w-[210px] md:h-[54px] w-[170px] h-[44px] relative bg-white rounded-full border 
          border-transparent md:text-[20px] text-[16px] md:mt-16 mt-8 text-black font-[600] flex justify-center
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-white before:origin-left before:scale-x-0 before:bg-black before:rounded-full 
          before:transition-transform before:duration-500 before:text-white hover:text-white before:-z-10 z-10 before:hover:rounded-full 
          before:hover:scale-x-100  '>Search Job</Link>

         
          </div>
           
        </div>
       <img src='/images/heroImg.png' className='w-full h-full  '/>
      </div>       
    </div>
  )
}

export default HeroSection
