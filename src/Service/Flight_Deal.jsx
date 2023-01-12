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
    <div data-aos="fade-down" className=" w-[100%] h-[15vh] ">
      <div className=" w-[94%] h-[30%] flex flex-row justify-around items-center ml-[2rem]">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[2.4rem] font-extrabold">
            Trending Flight Deals
          </h3>
          <p className="text-[grey] mt-[0.5rem]">
            Get the best flight deals, airline specials and promotions
          </p>
        </div>
        <div className="w-[15%] h-[9.5vh] rounded-[5px] bg-[#128c7e] flex flex-row items-center  gap-[0.75rem] justify-center  pl-[7px]">
          <div className="w-[40px] h-[35px] rounded-[100%] bg-[#5fb042] border-[white] border-[2px] ml-[1rem] flex  flex-row items-center justify-center ">
            <MdPhoneInTalk className=" w-[20px] h-[25px] fill-white " />
          </div>
          <div className=" w-[75%] text-[white] flex flex-col text-left">
            <p className="text-[0.85rem] font-extrabold">Need Help?</p>
            <p className="text-[0.75rem]">Click to get in touch.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight_Deal;
