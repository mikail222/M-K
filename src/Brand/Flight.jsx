import React from "react";
import { RiPlaneFill } from "react-icons/ri";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { RiArrowDropRightLine } from "react-icons/ri";

const Flight = () => {
  const day = new Date();
  return (
    <div>
      {" "}
      <div className="w-[100%] h-[30vh] flex flex-row gap-[0.5rem]  justify-center mt-[1rem]">
        <div className="details flex flex-row gap-[0.65rem] justify-center items-center">
          <RiPlaneFill className="fill-[lightgray] " />
          <form className="flex flex-col justify-center items-center">
            <label htmlFor="" className="text-[lightgray] mr-[10rem]">
              From
            </label>
            <input
              type="text"
              placeholder="Enter city"
              className="outline-none"
            />
          </form>
        </div>
        <RiArrowLeftRightFill className="mt-[2rem] fill-white w-[35px] h-[20px] rounded-[4px] z-[1]" />
        <div className="details flex flex-row gap-[0.65rem] justify-center items-center">
          <FaMapMarkerAlt className="fill-[lightgray] " />
          <form className="flex flex-col justify-center items-center">
            <label htmlFor="" className="text-[lightgray] mr-[12rem]">
              To
            </label>
            <input
              type="text"
              placeholder="Enter city"
              className="outline-none"
            />
          </form>
        </div>
        <div className="w-[27%] h-[40%] flex flex-row justify-center  items-center gap-[2rem] bg-white  rounded-[5px]">
          <div className="w-[50%] flex flex-row gap-[1rem] justify-center items-center ml-[1rem] ">
            <FcCalendar className="w-[20px] h-[20px]" />
            <div className="flex flex-col justify-center items-center p-[10px]">
              <p className="text-[lightgray] text-[1rem]">Departure</p>
              <p className="text-[0.85rem]">
                {day.toDateString().slice(0, 10)}
              </p>
            </div>
          </div>

          <div className="w-[50%] flex flex-row gap-[1rem] justify-center items-center mr-[1rem]">
            <FcCalendar className="w-[20px] h-[20px]" />
            <div className="flex flex-col justify-center items-center p-[10px]">
              <p className="text-[lightgray] text-[1rem] mr-[0.5rem]">
                Return{" "}
              </p>
              <p className="text-[0.85rem]">Mon,Jan 09</p>
            </div>
          </div>
        </div>
        <div className="details bg-[orange] flex flex-row justify-center  items-center">
          <p className="text-white">Search Flight</p>
          <RiArrowDropRightLine className="fill-white ml-[1.2rem] w-[25px] h-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Flight;
