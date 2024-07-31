import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white flex flex-col justify-center  items-center my-10 ">
      <p
        className="font-poppins text-black font-[700] lg:text-[38px] md:text-[24px] text-[16px] text-center px-2 md:px-8"
        data-aos="zoom-out"
      >
        Welcome to your gateway for connecting with top-tier talent in the UAE.
        We bridge the gap between exceptional companies and outstanding
        employees.
      </p>
      <p
        className="font-poppins text-[#B3B3B3] font-[500] lg:text-[20px] md:text-[18px] text-[12px] text-center px-2 md:px-0 mt-3 mb-[50px] md:mb-[100px]"
        data-aos="zoom-out"
      >
        Your success starts with the right connections – and we make them
        happen.
      </p>

      <div className="container w-[90%]   bg-white flex">
        <div className="w-full flex lg:flex-row flex-col gap-x-10 gap-y-10">
          <div className="lg:w-[50%] w-full flex flex-col gap-y-10">
            <div className="w-[100%] md:h-[692px] h-[520px] overflow-hidden md:rounded-[40px] rounded-[30px] relative z-40 group">
              <div className="w-full h-full absolute z-50 top-0 left-0 bottom-0 right-0 md:rounded-[40px] rounded-[30px] from-black to-transparent bg-gradient-to-b ">
                <p className="tag md:text-[30px] text-[26px] font-[700] font-poppins text-white pt-8  md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0">
                  Recruitment & Outsourcing
                </p>
                <p className="md:text-[22px] text-[18px] font-[400]  text-white pt-5 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 ">
                  Our recruitment and outsourcing services provide you with
                  flexible solutions to meet your staffing needs. We handle the
                  entire process from sourcing to onboarding, ensuring you have
                  the right talent when you need it.{" "}
                </p>

                <div className="absolute right-10 bottom-10">
                  <Link
                    to="/recruitment"
                    onClick={() => handleClick()}
                    className="w-[210px] h-[54px] text-white bg-black flex justify-center items-center opacity-0 transition-all duration-1500 ease-in-out transform -translate-x-[-100%] group-hover:opacity-100 group-hover:-translate-x-0 relative rounded-full border 
          border-transparent text-[20px]  md:mt-16 mt-8  font-[500] 
           overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-white before:origin-left before:scale-x-0 before:bg-white before:rounded-full 
          before:transition-transform before:duration-500 before:text-white hover:text-black before:-z-10 z-10 before:hover:rounded-full 
          before:hover:scale-x-100  "
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <img
                src="/images/recruitment.png"
                className="w-full h-full transition-all duration-1000 z-40 md:rounded-[40px] rounded-[30px] group-hover:scale-125"
              />
            </div>

            <div className="w-[100%] md:h-[692px] h-[520px] overflow-hidden md:rounded-[40px] rounded-[30px] relative z-40 group">
              <div className="w-full h-full absolute z-50 top-0 left-0 bottom-0 right-0 md:rounded-[40px] rounded-[30px] from-black to-transparent bg-gradient-to-b ">
                <p className="tag md:text-[30px] text-[26px] font-[700] font-poppins text-white pt-8 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0">
                  Permanent Recruitment
                </p>
                <p className="md:text-[22px] text-[18px] font-[400]  text-white pt-5 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 ">
                  Our permanent recruitment services are designed to find
                  long-term employees who are the perfect fit for your company.
                  We meticulously screen candidates to ensure they align with
                  your values and goals, helping you build a strong, dedicated
                  team.
                </p>

                <div className="absolute right-10 bottom-10">
                  <Link
                    to="/recruitment"
                    onClick={() => handleClick()}
                    className="w-[210px] h-[54px]  text-white bg-black flex justify-center items-center opacity-0 transition-all duration-1500 ease-in-out transform -translate-x-[-100%] group-hover:opacity-100 group-hover:-translate-x-0 relative rounded-full border 
          border-transparent text-[20px]  md:mt-16 mt-8  font-[500] 
           overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-white before:origin-left before:scale-x-0 before:bg-white before:rounded-full 
          before:transition-transform before:duration-500 before:text-white hover:text-black before:-z-10 z-10 before:hover:rounded-full 
          before:hover:scale-x-100  "
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <img
                src="/images/permanent.png"
                className="w-full h-full transition-all duration-1000 z-40 md:rounded-[40px] rounded-[30px] group-hover:scale-125"
              />
            </div>
          </div>

          <div className="lg:w-[50%] w-full lg:mt-40 flex flex-col gap-y-10">
            <div className="w-[100%] md:h-[692px] h-[520px] overflow-hidden md:rounded-[40px] rounded-[30px] relative z-40 group">
              <div className="w-full h-full absolute z-50 top-0 left-0 bottom-0 right-0 md:rounded-[40px] rounded-[30px] from-black to-transparent bg-gradient-to-b ">
                <p className="tag md:text-[30px] text-[26px] font-[700] font-poppins text-white pt-8 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0">
                  HR Services
                </p>
                <p className="md:text-[22px] text-[18px] font-[400]  text-white pt-5 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 ">
                  We offer tailored HR solutions to streamline your workforce
                  management, providing expert guidance in employee relations,
                  compliance, and development. Our goal is to empower your HR
                  team to drive organizational success.{" "}
                </p>

                <div className="absolute right-10 bottom-10">
                  <Link
                    to="/hrservice"
                    onClick={() => handleClick()}
                    className="w-[210px] h-[54px]  text-white bg-black flex justify-center items-center opacity-0 transition-all duration-1500 ease-in-out transform -translate-x-[-100%] group-hover:opacity-100 group-hover:-translate-x-0 relative rounded-full border 
          border-transparent text-[20px]  md:mt-16 mt-8  font-[500] 
           overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-white before:origin-left before:scale-x-0 before:bg-white before:rounded-full 
          before:transition-transform before:duration-500 before:text-white hover:text-black before:-z-10 z-10 before:hover:rounded-full 
          before:hover:scale-x-100  "
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <img
                src="/images/HRservices.png"
                className="w-full h-full transition-all duration-1000 z-40 md:rounded-[40px] rounded-[30px] group-hover:scale-125"
              />
            </div>

            <div className="w-[100%] md:h-[692px] h-[520px] overflow-hidden md:rounded-[40px] rounded-[30px] relative z-40 group">
              <div className="w-full h-full absolute z-50 top-0 left-0 bottom-0 right-0 md:rounded-[40px] rounded-[30px] from-black to-transparent bg-gradient-to-b ">
                <p className="tag md:text-[30px] text-[26px] font-[700] font-poppins text-white pt-8  md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0">
                  Contract Recruitment
                </p>
                <p className="md:text-[22px] text-[18px] font-[400]  text-white pt-5 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 ">
                  Our contract recruitment services provide you with the
                  flexibility to meet short-term project demands. We connect you
                  with highly skilled professionals ready to contribute
                  immediately, ensuring your projects stay on track and on
                  budget.
                </p>

                <div className="absolute right-10 bottom-10">
                  <Link
                    to="/recruitment"
                    onClick={() => handleClick()}
                    className="w-[210px] h-[54px]  text-white bg-black flex justify-center items-center opacity-0 transition-all duration-1500 ease-in-out transform -translate-x-[-100%] group-hover:opacity-100 group-hover:-translate-x-0 relative rounded-full border 
          border-transparent text-[20px]  md:mt-16 mt-8  font-[500] 
           overflow-hidden before:absolute before:left-0 before:top-0  before:w-full 
          before:h-full before:hover:border-white before:origin-left before:scale-x-0 before:bg-white before:rounded-full 
          before:transition-transform before:duration-500 before:text-white hover:text-black before:-z-10 z-10 before:hover:rounded-full 
          before:hover:scale-x-100  "
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <img
                src="/images/contract.png"
                className="w-full h-full transition-all duration-1000 z-40 md:rounded-[40px] rounded-[30px] group-hover:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
