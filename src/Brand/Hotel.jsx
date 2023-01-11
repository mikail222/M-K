import React from "react";
import { BiHotel } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { RiArrowDropRightLine } from "react-icons/ri";

const Hotel = () => {
  const date = new Date();
  const days = new Date();
  days.setDate(days.getDate() + 3);
  return (
    <div>
      <div className="w-[100%] h-[30vh] flex flex-row gap-[0.5rem]  justify-center mt-[1rem]">
        <div className="details flex flex-row gap-[0.65rem] justify-center items-center">
          <BiHotel className="fill-[lightgray] w-[25px] h-[25px] " />
          <form className="flex flex-col justify-center items-center">
            <label htmlFor="" className="text-[grey] text-[0.75rem] mr-[9rem]">
              Going to?
            </label>
            <input
              type="text"
              placeholder="city or hotel name"
              className="outline-none"
            />
          </form>
        </div>
        <div className="details flex flex-row gap-[0.65rem] justify-center items-center">
          <BsFillPersonFill className="fill-[lightgray] w-[20px] h-[25px]" />
          <form className="flex flex-col justify-center items-center">
            <label htmlFor="" className="text-[grey] text-[0.75rem] mr-[6rem] ">
              Rooms and guests
            </label>
            <input
              type="text"
              placeholder="1 Room,1 Guest"
              className="outline-none text-[black]"
            />
          </form>
        </div>
        <div className="w-[27%] h-[40%] flex flex-row justify-center  items-center gap-[2rem] bg-white  rounded-[5px]">
          <div className="w-[50%] flex flex-row gap-[1rem] justify-center items-center ml-[1rem] ">
            <FcCalendar className="w-[20px] h-[20px]" />
            <div className="flex flex-col justify-center items-center p-[10px]">
              <p className="text-[grey] text-[0.75rem]">Check-in</p>
              <p className="text-[0.85rem] font-bold">
                {date.toDateString().slice(0, 10)}
              </p>
            </div>
          </div>

          <div className="w-[50%] flex flex-row gap-[1rem] justify-center items-center mr-[1rem]">
            <FcCalendar className="w-[20px] h-[20px]" />
            <div className="flex flex-col justify-center items-center p-[10px]">
              <p className="text-[grey] text-[0.75rem] mr-[0.5rem]">
                Check-out
              </p>
              <p className="text-[0.85rem] font-bold">
                {days.toDateString().slice(0, 10)}
              </p>
            </div>
          </div>
        </div>
        <div className="details bg-[orange] flex flex-row justify-center  items-center">
          <p className="text-white">Search Hotel</p>
          <RiArrowDropRightLine className="fill-white ml-[1.2rem] w-[25px] h-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
