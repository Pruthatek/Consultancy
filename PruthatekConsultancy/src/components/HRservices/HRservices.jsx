import React, { useState } from 'react'
import { X} from "lucide-react"
import { Link } from 'react-router-dom'

const HRservices = () => {
    
    const services = [
        {
            name: "HR Strategy",
            img: "/images/hrstrategy.png",
            content: "Our HR strategy service is tailored to align your human resources with your business objectives. We work with you to develop a strategic HR plan that supports your company's vision and goals. Our approach involves understanding your unique challenges and opportunities, crafting solutions that drive organizational success. From talent acquisition to leadership development, we design strategies that enhance your competitive advantage."
        },
        {
            name: "HR Analytics",
            img: "/images/hranalytics.png",
            content: "Harness the power of data with our HR analytics service, designed to provide you with deep insights into your workforce. We collect and analyze HR data to identify trends, measure performance, and predict future needs. Our analytics help you make informed decisions about hiring, retention, and employee development. By leveraging advanced tools and techniques, we transform raw data into actionable intelligence."
        },
        {
            name: "HR Audit",
            img: "/images/hraudit.png",
            content: "Our HR audit service provides a comprehensive review of your HR policies, procedures, and practices to ensure compliance and efficiency. We identify areas of improvement and provide actionable recommendations to enhance your HR functions. By assessing your HR operations, we help you mitigate risks and align your practices with industry standards. Our audit covers all aspects of HR, from recruitment and onboarding to employee relations and performance management."
        },
        {
            name: "Employee Survey",
            img: "/images/survey.png",
            content: "Our employee surveys service provides valuable insights into employee satisfaction and engagement. By gathering honest feedback, we help you identify strengths and areas for improvement within your organization. Our surveys are tailored to address your specific needs, ensuring relevant and actionable data. With our comprehensive analysis, you can implement changes that enhance workplace culture and productivity. Empower your workforce by giving them a voice and driving positive organizational change."
        },
        {
            name: "Benefits & Compensation",
            img: "/images/benefits.png",
            content: "Our benefits and compensation service is designed to create competitive and attractive packages for your employees. We assess your current offerings and benchmark them against industry standards to ensure you remain competitive. Our expert team helps you design and implement benefits and compensation plans that meet the diverse needs of your workforce. By aligning your packages with your business goals, we enhance employee satisfaction and retention. Trust us to develop a comprehensive strategy that supports your company's growth and success."
        },
        {
            name: "Policies & Procedures",
            img: "/images/policies.png",
            content: "Our policies and procedures service ensures your organization operates efficiently and compliantly. We help you develop clear, comprehensive, and legally sound policies that guide employee behavior and decision-making. By standardizing procedures, we minimize risks and enhance consistency across your organization. Our expertise ensures that your policies reflect best practices and align with your organizational goals. Create a stable and predictable work environment with our tailored policies and procedures service."
        },
        {
            name: "Learning & Development",
            img: "/images/development.png",
            content: "Our learning and development service is designed to foster continuous growth and skill enhancement within your organization. We create customized training programs that address your specific needs and support employee career development. By investing in your workforce's skills, you enhance productivity and innovation. Our approach integrates the latest learning methodologies to ensure effective knowledge transfer. Empower your employees to reach their full potential and drive your organization's success."
        },
        {
            name: "Succession planning",
            img: "/images/successsion.png",
            content: "Our succession planning service prepares your organization for future leadership transitions. We identify and develop high-potential employees to ensure a smooth and seamless succession process. By focusing on leadership development, we help you build a resilient and adaptable workforce. Our strategic approach ensures that your key positions are always filled with qualified and prepared individuals. Secure your organization's future with our comprehensive succession planning solutions."
        },
        {
            name: "Performance Management",
            img: "/images/performance.png",
            content: "Our performance management service helps you create a culture of continuous improvement and accountability. We design and implement performance management systems that align with your organizational goals. By setting clear expectations and providing regular feedback, we enhance employee performance and development. Our approach includes goal setting, performance reviews, and development plans to ensure sustained employee growth. Drive organizational success with our effective performance management strategies."
        },
    ]
    const [popUp, setPopUp] = useState([])
    const changeContent= (sign)=>{
        setPopUp([sign]);
        setPopUpToggle(!popUpToggle)
   }
   const [popUpToggle, setPopUpToggle] = useState(false);
   const handleCLick = ()=>{
    window.scrollTo(0,0)
  }
    
  return (
    <>
       <div className='relative z-40 font-euclid'>
       <div className='w-full lg:h-full md:h-[600px] h-[500px] bg-black  relative '>
        <div className='absolute bg-gradient-to-b top-0 left-0 right-0 bottom-0 from-black to-transparent flex flex-col justify-start items-center'>
          <div className='lg:mt-40 mt-[100px]   flex flex-col items-center'>
          <p className='font-[500] lg:text-[24px] md:text-[20px] text-[18px] text-[#B3B3B3]   text-center px-4 md:px-10 lg:px-20  lg:leading-10'>We offer tailored HR solutions to streamline your workforce management, providing expert guidance in employee relations, compliance, and development. Our goal is to empower your HR team to drive organizational success.
           </p>
          </div>    
        </div>
        <div className='w-full h-full flex justify-end items-end '>
        <img src='/images/HRbg.jpg' className=' w-full h-[80%] md:h-full '/>
        </div>
      
      </div>       
    </div>

    <div className=' flex flex-col relative gap-y-8 py-20 bg-white '>
        <div className='column w-[100%] flex flex-row justify-center flex-wrap gap-x-8 gap-y-8'>
            {services.map((service, index)=>{
                return (
                    <div className=' group lg:w-[30%] md:w-[40%] w-[90%] h-[424px] relative '>
                <div className='absolute w-full h-full group-hover:bg-black/10 duration-500 transition-all rounded-[46px] bg-black/60 flex justify-center items-center '> 
                  <button onClick={()=> changeContent(service)} className='w-fit h-fit px-5  py-3 rounded-[18px] border-[2px] group-hover:bg-white group-hover:text-black duration-500 transition-all border-white font-[500] lg:text-[24px] text-[22px] font-euclid text-white '>{service.name}</button>
                </div>
                <img src={service.img} className='w-full h-full rounded-[46px] object-cover'/>
              </div>
                )
            })}

            {popUpToggle && <>
            {popUp.map((pop,index)=>{
                return (
               <div className=' fixed z-40  top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center'>
                 <div className='lg:w-[80%] w-[90%]  h-fit py-10 md:rounded-[50px] rounded-[30px] relative  bg-white lg:px-10 md:px-6 px-4 gap-x-8 flex md:flex-row flex-col  items-center '>
                   <X size={28} color={"#AEAEB2"} className='absolute md:right-8 right-4 top-8 cursor-pointer' onClick={changeContent}/>
                   <img src={pop.img} className='md:w-[50%] w-[80%] h-[80%] rounded-[18px] '/>
                   <div className=''>
                    <p className='font-[600] lg:text-[35px] md:text-[30px] text-[26px] text-black font-euclid mt-4 md:mt-0'>{pop.name}</p>
                    <p className='font-[400] lg:text-[20px] md:text-[18px] text-[16px] text-[#101010] font-euclid md:mt-5 mt-3 md:leading-9 leading-8'>{pop.content}</p>
                   </div>
                 </div>   
               </div>
                )
            })}
            
            </>}
           
        </div>
    </div>

    <div className='mb-20 mt-5 lg:mb-40 lg:mt-10 '>
        <p className='md:text-[36px] text-[30px] font-[600] font-euclid text-black text-center '>Do you want to uncover more about this?</p>
        <p className='md:text-[20px] text-[18px] px-4 lg:px-0 font-[500] font-euclid text-[#B3B3B3] text-center mt-4'>We extend a warm welcome to new clients seeking consultancy, contact us, and
        we'll happily arrange a call or meeting.</p>
        <div className='flex justify-center items-center'>
        <Link to="/getintouch" onClick={()=>handleCLick()} className='md:w-[289px] md:h-[52px] w-[190px] h-[44px] relative bg-black rounded-full border 
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

export default HRservices
