import React, {useEffect} from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Recruitment = () => {
    useEffect(()=>{
        AOS.init({duration:3000});
      }, []);
      
      const handleCLick = ()=>{
        window.scrollTo(0,0)
      }
  return (
    <>
    <div className='relative z-40 font-euclid'>
      <div className='w-full lg:h-full md:h-[600px] h-[500px] bg-black relative '>
        <div className='absolute bg-gradient-to-b top-0 left-0 right-0 bottom-0 from-black to-transparent flex flex-col justify-start items-center'>
          <div className='md:mt-40 mt-[100px]   flex flex-col items-center'>
          <p className='font-[500] lg:text-[24px] md:text-[20px] text-[18px]  text-[#B3B3B3]  text-center px-4 md:px-10 lg:px-20 '>
          Our specialized recruitment services are designed to find the perfect fit for your company. We conduct comprehensive candidate screening to ensure top-quality hires, connecting you with skilled professionals ready to make an impact. </p>
          </div>    
        </div>
        <div className='w-full h-full flex justify-end items-end '>
        <img src='/images/recruitmentBg.jpg' className=' w-full h-[80%] md:h-full '/>
        </div>
      </div>       
    </div>

    <div className='bg-white flex flex-col justify-center  items-center lg:my-40 my-20'>
        <p className='font-euclid lg:text-[46px] md:text-[32px] text-[24px] font-[700] text-black text-center px-4 md:px-10 lg:px-20 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%]' data-aos='fade-left' >
        We understand the unique demands of the UAE job market and tailor our approach to meet your specific needs.
        </p>
        <p className='font-euclid lg:text-[25px] md:text-[22px] text-[18px] font-[500] text-[#B3B3B3] text-center px-4 md:px-10 lg:px-20 mt-14 opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%]'  data-aos='fade-up'>
        Trust us to help you build a team that drives your business forward. 
        </p>
    </div>

    <div className='flex lg:px-10 gap-x-8 gap-y-10 px-4 lg:flex-row flex-col'>
       <div className='lg:w-[50%] md:mx-auto mx-0  md:w-[90%] w-[100%]'>
          <p className='text-[30px] font-[600] text-black font-euclid'>Permanent Recruitment</p>
          <p className='text-[18px] font-[400] text-black font-euclid mt-8'>Our permanent recruitment services are designed to find long-term employees who are the perfect fit for your company. We meticulously screen candidates to ensure they align with your values and goals, helping you build a strong, dedicated team. By understanding your unique needs, we tailor our search to bring you individuals who will thrive in your company culture.</p>
         <p className='text-[18px] font-[400] text-black font-euclid mt-2'> Our extensive network and industry expertise allow us to source top talent efficiently. We focus on quality over quantity, ensuring each candidate we present meets your high standards. Trust us to help you build a workforce that drives sustained success and growth for your organization.</p>
       
         
       </div>
       <div className='lg:w-[50%] md:mx-auto mx-0  md:w-[90%] w-[100%]'>
          <img src='/images/permanentRec.png' className='w-full'/>
       </div>
    </div>

    <div className='flex lg:px-10 gap-x-8 gap-y-10 px-4 md:mt-[100px] mt-[80px] lg:flex-row-reverse flex-col'>
       <div className='lg:w-[50%] md:mx-auto mx-0  md:w-[90%] w-[100%]'>
          <p className='text-[30px] font-[600] text-black font-euclid'>Contract Recruitment</p>
          <p className='text-[18px] font-[400] text-black font-euclid mt-8'>Our contract recruitment services provide you with the flexibility to meet short-term project demands. We connect you with highly skilled professionals ready to contribute immediately, ensuring your projects stay on track and on budget. Whether you need temporary staff for a few weeks or several months, we have the resources to match you with the right talent quickly.</p>
         <p className='text-[18px] font-[400] text-black font-euclid mt-2'>Our candidates are thoroughly vetted to ensure they possess the necessary skills and experience. We handle all administrative aspects, from contracts to payroll, allowing you to focus on project execution. Rely on us to deliver reliable, adaptable professionals who can seamlessly integrate into your team.</p>
         
       </div>
       <div className='lg:w-[50%] md:mx-auto mx-0  md:w-[90%] w-[100%]'>
          <img src='/images/contractRec.png' className='w-full'/>
       </div>
    </div>

    <div className='my-20 lg:my-40'>
        <p className='md:text-[36px] text-[30px] font-[600] font-euclid text-black text-center '>Do you want to uncover more about this?</p>
        <p className='md:text-[20px] text-[18px] px-4 lg:px-0 font-[500] font-euclid text-[#B3B3B3] text-center mt-4'>We extend a warm welcome to new clients seeking consultancy, contact us, and
        we'll happily arrange a call or meeting.</p>
        <div className='flex justify-center items-center'>
        <Link to={"/getintouch"} onClick={()=>handleCLick()} className='md:w-[289px] md:h-[52px] w-[190px] h-[44px] relative bg-black rounded-full border 
          border-transparent md:text-[20px] text-[16px]  mt-8 text-white font-[600] flex justify-center
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-full 
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-full 
          before:hover:scale-x-100  '>Get In Touch</Link>
        </div>
       
    </div>
    </>
    
  )
}

export default Recruitment
