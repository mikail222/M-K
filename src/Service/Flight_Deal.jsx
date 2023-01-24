import React, { useEffect } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const Flight_Deal = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div
      data-aos="fade-down"
      className="w-[100%] flex flex-col  justify-center items-center mb-[50%] lg:mb-[1px] h-[35vh] lg:h-[20vh] "
    >
      <div className="flex-col-reverse lg:w-[80%] lg:h-[30%] flex lg:flex-row justify-between items-center gap-[3rem]">
        <div className="flex flex-col lg:justify-center lg:items-center">
          <h3 className="sm:text-[1.6rem] lg:text-[2.4rem] font-extrabold">
            Trending Flight Deals
          </h3>
          <p className="text-[grey] text-left mt-[1rem]">
            Get the best flight deals, airline specials and promotions
          </p>
        </div>
        <a
          href="http://#"
          className="w-[90%] h-[12vh] flex flex-row justify-center items-center lg:w-[17%] lg:h-[9.5vh] rounded-[5px] bg-[#128c7e]  gap-[0.75rem]   pl-[7px]"
        >
          <div className=" lg:w-[40px] h-[35px] rounded-[100%] bg-[#5fb042] border-[white] border-[2px] lg:ml-[1rem] flex  flex-row items-center justify-center ">
            <MdPhoneInTalk className=" lg:w-[20px] h-[25px] fill-white" />
          </div>
          <div className=" lg:w-[75%] text-[white] flex flex-col text-left">
            <p className="text-[0.85rem] font-extrabold">Need Help?</p>
            <p className="text-[0.75rem]">Click to get in touch.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Flight_Deal;
