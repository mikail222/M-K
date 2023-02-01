import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClear } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import SlideShow from "../Service/SlideShow";
import { useNavigate } from "react-router-dom";

const Nav_bar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const nav = [
    { Hotel: "Hotel" },
    { visa: "Dubai visa" },
    { vacation: "Vacation packages" },
    { affilate: "Become an afillation" },
  ];
  const mobile_nav = [
    "Dubai visa",
    "Vacation packages",
    "Become an afillation",
    "Login",
    "Create Account",
  ];
  let menu;
  return (
    <div>
      <div className=" hidden bg-[white] mt-[3%] top-0  w-[100%] cursor-pointer h-[16vh] lg:flex flex-row items-center justify-between lg:border-b-[2px] border-[#f7f7f7]">
        <SlideShow />
        <div>
          <a
            onClick={() => navigate("/")}
            className="text-[white] text-[2rem] p-[10px] rounded-[100%] hover:bg-[transparent]  hover:text-[black] hover:border-[#0f0326] border-[1px] bg-[#01004d]   border-[#d1a9db]"
          >
            𝔐&𝔨
          </a>
        </div>
        <div className="flex flex-row gap-[0.45rem]  mr-[0.15rem] ">
          {nav.map(({ Hotel, visa, vacation, affilate }, i) => (
            <div
              key={i}
              className=" text-[#0f0326] rounded-[20%] text-[0.95rem] p-[0.85rem]"
            >
              <p onClick={() => navigate("/")}>{Hotel}</p>
              <p onClick={() => navigate("/Visa_assistance")}>{visa}</p>
              <p onClick={() => navigate("/")}>{vacation}</p>
              <p onClick={() => navigate("/")}>{affilate}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-[1.5rem] items-center">
          <a
            onClick={() => navigate("/Login")}
            className="outline-none text-[0.95rem] text-[#01004d] font-bold"
          >
            Login
          </a>
          <a
            onClick={() => navigate("/Sign_in")}
            className="outline-none text-[0.95rem]  p-[0.65rem] mb-[0.20rem] bg-[orange] rounded-[3px] mr-[5rem] font-bold px-[0.95rem] text-white"
          >
            Create account
          </a>
        </div>
      </div>
      <div className="menuBar lg:hidden  bg-white ">
        {show ? (
          <div className=" md:flex flex-col w-[95%] h-[100vh]">
            <div className="flex flex-row  justify-between mt-[2rem]">
              <a
                href="#"
                className="text-[2rem]  font-extrabold text-[#020180] ml-[1rem] "
              >
                𝔐&𝔨
              </a>
              <MdOutlineClear
                title="Menu Bar"
                onClick={(e) => setShow(!show)}
                className="w-[35px] h-[35px] "
              />
            </div>

            <div className="flex flex-col text-left mt-[8%] ml-[1rem]">
              {mobile_nav.map((x, i) => (
                <div key={i} className="flex flex-row justify-between">
                  <a
                    href="http://#"
                    className="outline-none rounded-[20%] text-[1.4rem] font-thin p-[0.95rem]"
                  >
                    {x}
                  </a>
                  <a href="http://#" target="_blank" rel="noopener noreferrer">
                    {" "}
                    <RiArrowDropRightLine className="w-[30px] h-[35px]" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <SlideShow />
            <div className="flex flex-row w-[90vw] h-[15vh] justify-between items-center mt-[1.5rem] ">
              <a
                href="#"
                className="text-[1.5rem] md:text-[2rem] font-extrabold text-[#020180] ml-[1rem]"
              >
                𝔐&𝔨
              </a>
              <RxHamburgerMenu
                title="Menu Bar"
                onClick={(e) => setShow(!show)}
                className="w-[30px] h-[25px] "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav_bar;
