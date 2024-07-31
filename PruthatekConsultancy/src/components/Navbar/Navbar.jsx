import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Menu, CircleX, ChevronDown } from "lucide-react";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Search Jobs",
      link: "/searchjobs",
    },
    {
      name: "Recruitment & Outsourcing",
      link: "/recruitment",
    },
    {
      name: "HR Service",
      link: "/hrservice",
    },
    {
      name: "Training Academy",
      link: "/training",
    },
  ];

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActive("Home");
        break;
      case "/searchjobs":
        setActive("Search Jobs");
        break;
      case "/recruitment":
        setActive("Recruitment");
        break;
      case "/hrservice":
        setActive("HR Service");
        break;
      default:
        setActive("");
    }
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`w-full my-2 font-poppins absolute top-0  bg-transparent z-50 flex justify-between items-center px-5`}
      >
        <Link to="/" className="logo">
          <img src="/images/Logo.svg" className="w-[120px] lg:w-[180px] " />
        </Link>

        <div className="lg:flex hidden justify-between z-50 items-center gap-x-10">
          <Link to="/" onClick={() => setActive("Home")}>
            <div
              className={`font-normal text-[18px] text-white ${
                active === "Home"
                  ? "border-b-[2px] border-b-white font-medium "
                  : ""
              } `}
            >
              Home
            </div>
          </Link>
          <Link to="/searchjobs" onClick={() => setActive("Search Jobs")}>
            <div
              className={`font-normal text-[18px] text-white ${
                active === "Search Jobs"
                  ? "border-b-[2px] border-b-white font-medium "
                  : ""
              } `}
            >
              Search Jobs
            </div>
          </Link>
          <Link to="/recruitment" onClick={() => setActive("Recruitment")}>
            <div
              className={`font-normal text-[18px] text-white ${
                active === "Recruitment"
                  ? "border-b-[2px] border-b-white font-medium "
                  : ""
              } `}
            >
              Recruitment
            </div>
          </Link>
          <Link to="/hrservice" onClick={() => setActive("HR Service")}>
            <div
              className={`font-normal text-[18px] text-white ${
                active === "HR Service"
                  ? "border-b-[2px] border-b-white font-medium "
                  : ""
              } `}
            >
              HR Service
            </div>
          </Link>
        </div>

        <div className="flex md:gap-x-5 gap-x-3 items-center">
          <LanguageSelector />

          <Link
            to={"/getintouch"}
            onClick={() => setActive("")}
            className={`w-fit px-3 h-[30px] md:h-[40px] flex justify-center items-center gap-x-2 md:rounded-[10px] rounded-[6px] border border-transparent duration-500 transition-all bg-white cursor-pointer hover:border-white hover:bg-transparent  group`}
          >
            <div className="md:w-[24px] md:h-[24px] w-[20px] h-[20px] ">
              <svg
                width="full"
                height="full"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 4C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 
              20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4H19ZM20 7.328L12.6585 13.7526C12.3129 14.055 11.8111 14.0802 11.4394 13.8282L11.3415 
              13.7526L4 7.329V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V7.328ZM18.48 6H5.518L12 11.6712L18.48 6Z"
                  fill="black"
                  className={`group-hover:fill-white  duration-500 transition-all `}
                />
              </svg>
            </div>

            <p
              className={`group-hover:text-white font-semibold md:text-[14px] text-[12px] text-black duration-500 transition-all `}
            >
              Get In Touch
            </p>
          </Link>

          <div
            onClick={() => setShow(!show)}
            className="block relative lg:hidden "
          >
            <Menu color="#ffffff" />
          </div>
          {show && (
            <div className="fixed h-full w-screen lg:hidden bg-black top-0 right-0 z-50">
              <div className="flex justify-end p-14">
                <CircleX
                  color="#ffffff"
                  size={30}
                  onClick={() => setShow(false)}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-10">
                <Link
                  to="/"
                  onClick={() => setShow(false)}
                  className="font-normal text-white "
                >
                  Home
                </Link>
                <Link
                  to="/searchjobs"
                  onClick={() => setShow(false)}
                  className="font-normal text-white "
                >
                  Search Jobs
                </Link>
                <Link
                  to="/recruitment"
                  onClick={() => setShow(false)}
                  className="font-normal text-white "
                >
                  Recruitment
                </Link>
                <Link
                  to="/hrservice"
                  onClick={() => setShow(false)}
                  className="font-normal text-white "
                >
                  HR Service
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
