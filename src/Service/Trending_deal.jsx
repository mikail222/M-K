import React, { useEffect } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { TbArrowNarrowDown } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const Trending_deal = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const day = new Date();
  const departure = new Date();
  const returnDate = day.setDate(day.getDate() + 8);
  return (
    <div className="w-[100%] my-[10%] flex flex-col justify-center items-center">
      <div className=" flex flex-col w-[100vw] justify-center items-center h-[100vh] lg:w-[80%] lg:h-[50vh] lg:flex lg:flex-row lg:gap-[1rem] ">
        <div className="container">
          <div className="deal">
            <div className="text-[0.75rem] w-[8rem] lg:mr-[0.5rem] bg-[white] m-[0.5rem] ml-[11rem] lg:justify-center rounded-[3px] lg:text-[0.87rem] text-[blue] lg:w-[40%]">
              <p>Top flight deal</p>
            </div>
            <div className=" ml-[3rem] lg:ml-[1.5rem] text-[1.2rem] font-extrabold text-[white] w-[10%]">
              <p>Lagos</p>
              <TbArrowNarrowDown className="w-[25px] h-[25px]" />
              <p>London</p>
            </div>
            <div className="text-[white] text-left ml-[1rem] mt-[5rem]">
              <p className="text-[2rem]  font-extrabold">₦400,540</p>
              <p className="text-[0.85rem] mt-[0.5rem]">
                {departure.toDateString()} - {day.toDateString()}
              </p>
            </div>
          </div>
          <div className="w-[90%] h-[8vh] text-[white] flex flex-row justify-between  items-center">
            <img
              src="https://seeklogo.com/images/Q/Qatar_Airways-logo-EE07072405-seeklogo.com.png"
              alt=""
              className="w-[5rem] lg:w-[33%] h-[25px]"
            />
            <div className=" w-[7rem] lg:w-[40%] h-[5vh] flex flex-row gap-[0.25rem]  justify-center rounded-[3px] items-center bg-[orange]">
              <a href="#" className="text-[0.85rem] font-extrabold">
                Book now
              </a>
              <RiArrowDropRightLine className="fill-white w-[25px] h-[35px]" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="deal">
            <div className=" mr-[0.5rem] bg-[white] lg:ml-[9.5rem] m-[0.5rem] justify-center rounded-[3px] ml-[11rem] text-[0.87rem] text-[blue] w-[40%] ">
              <p>Top flight deal</p>
            </div>
            <div className="ml-[1.5rem] text-[1.2rem] font-extrabold text-[white] w-[10%]">
              <p>Lagos</p>
              <TbArrowNarrowDown className="w-[25px] h-[25px]" />
              <p>Machester</p>
            </div>
            <div className="text-[white]  text-left ml-[1rem] mt-[5rem]">
              <p className="text-[2rem] font-extrabold">₦535,492</p>
              <p className="text-[0.85rem]  mt-[0.5rem]">
                {departure.toDateString()} - {day.toDateString()}
              </p>
            </div>
          </div>
          <div className="w-[90%] h-[8vh] text-[white] flex flex-row justify-between  items-center">
            <img
              src="https://seeklogo.com/images/Q/Qatar_Airways-logo-EE07072405-seeklogo.com.png"
              alt=""
              className="lg:w-[33%] h-[25px]"
            />
            <div className="w-[7rem] lg:w-[40%] h-[5vh] flex flex-row gap-[0.25rem]  justify-center rounded-[3px] items-center bg-[orange]">
              <a href="#" className="text-[0.85rem] font-extrabold">
                Book now
              </a>
              <RiArrowDropRightLine className="fill-white w-[25px] h-[35px]" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="deal">
            <div className=" mr-[0.5rem] bg-[white] ml-[11rem] lg:ml-[9.5rem] m-[0.5rem] justify-center rounded-[3px] text-[0.87rem] text-[blue] w-[40%]">
              <p>Top flight deal</p>
            </div>
            <div className="ml-[1.5rem] text-[1.2rem] font-extrabold text-[white] w-[10%] ">
              <p>Lagos</p>
              <TbArrowNarrowDown className="w-[25px] h-[25px] " />
              <p>Jedda</p>
            </div>
            <div className="text-[white] text-left ml-[1rem] mt-[5rem]">
              <p className="text-[2rem] font-extrabold">₦335,102</p>
              <p className="text-[0.85rem] font-thin   mt-[0.5rem]">
                {" "}
                {departure.toDateString()} - {day.toDateString()}
              </p>
            </div>
          </div>
          <div className="w-[90%] h-[8vh] text-[white] flex flex-row justify-between  items-center">
            <img
              src="https://seeklogo.com/images/Q/Qatar_Airways-logo-EE07072405-seeklogo.com.png"
              alt=""
              className=" lg:w-[33%] h-[25px]"
            />
            <div className="w-[7rem] lg:w-[40%] h-[5vh] flex flex-row gap-[0.25rem]  justify-center rounded-[3px] items-center bg-[orange]">
              <a href="#" className="text-[0.85rem] font-extrabold">
                Book now
              </a>
              <RiArrowDropRightLine className="fill-white w-[25px] h-[35px]" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[100%] h-[20vh] mt-[40%] lg:h-[10vh] text-right text-[#0827b1] flex flex-row gap-[0.5rem] lg:mt-[2rem] justify-center items-center ">
        <a href="http://#" className=" lg:ml-[60%]">
          <p className="text-[0.85rem] font-extrabold">View More details</p>
        </a>
        <RiArrowDropRightLine className="fill-green w-[25px] h-[35px]" />
      </div>
    </div>
  );
};

export default Trending_deal;
