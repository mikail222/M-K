import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const Services = ({ navigate }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className=" lg:w-[80vw] w-[70%] lg:h-[40vh] overflow-auto flex flex-row mt-[3%] lg:ml-[10%] justify-center ml-[2rem] gap-[4rem]">
        <p className=" hidden w-[2.7%] mt-[3%] h-[14%] bg-[gray] rounded-[100%] lg:mr-[2%] lg:flex flex-row justify-center items-center cursor-pointer">
          <RiArrowDropLeftLine className="w-[100vw] h-[100%] text-white" />
        </p>
        <a
          href="#"
          className="w-[90vw] lg:w-[40%] lg:h-[20vh] flex flex-row  gap-[1.5rem]"
        >
          <img
            src="https://m.media-amazon.com/images/I/71rsagJu5tL._AC_UY500_.jpg"
            alt=""
            className="w-[30%]  h-[18vh]"
          />
          <div className="flex flex-col text-left bg-white">
            <p className="text-[1.1rem] font-extrabold">Blue Ribbon</p>
            <p className="pr-[2rem] mt-[1rem] text-[grey]">
              We offer global Baggage protection on all flights
            </p>
          </div>
        </a>
        <a
          href="#"
          className=" bg-white w-[90vw] mx-[3rem] lg:w-[40%] h-[20%] flex flex-row gap-[1.5rem]"
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/006/978/165/small/police-cap-illustration-on-a-white-background-vector.jpg"
            alt=""
            className="w-[30%]  h-[70%]"
          />
          <div className="flex flex-col text-left bg-white">
            <p className="text-[1.1rem] font-extrabold mb-[1rem]">
              Protocol Service{" "}
            </p>
            <p className="pr-[2rem] text-[grey]">
              Expedited and Smooth passage through Airport imigration
            </p>
          </div>
        </a>
        <button
          onClick={() => navigate("/Visa_assistance")}
          className=" bg-white w-[90vw] lg:w-[40%] h-[20%] flex flex-row gap-[1.5rem]"
        >
          <img
            src="https://i.ibb.co/JBJQs9Z/47016de88442.png"
            alt=""
            className="w-[20%]  h-[15vh]"
          />
          <div className="  flex flex-col text-left  bg-white">
            <p className="text-[1.1rem] font-extrabold">Visa Assistance</p>
            <p className="pr-[1rem] mt-[1rem] text-[grey]">
              all inclusive visa assistance in a timely,and secure manner
            </p>
          </div>
        </button>
        <p className="hidden w-[2.7%] cursor-pointer mt-[3%] h-[14%] bg-[gray] rounded-[100%] lg:flex flex-row justify-center items-center">
          <RiArrowDropRightLine className="w-[100vw] h-[100%] text-white" />
        </p>
      </div>
    </div>
  );
};

export default Services;
