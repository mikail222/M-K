import React, { useEffect } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const Rent_vehichle = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      className="flex-col lg:w-[100%] h-[90vh] lg:h-[90vh] flex lg:flex-row justify-center lg:mt-[3%]"
    >
      <div className="w-[100vw] h-[90vh] mt-[10rem] lg:m-0 lg:w-[65%] flex flex-row justify-center items-center">
        <img
          src="https://www.abettervaluecarhire.com.au/wp-content/uploads/2022/05/2014-2015-8-Seat-Hyundai-Imax-Auto.jpg"
          alt=""
          className="w-[90%] lg:w-[90%] lg:h-[90%]"
        />
      </div>
      <div className=" w-[90vw] lg:text-center lg:ml-[2rem] lg:w-[30%] flex flex-col justify-left items-left text-left">
        <div className="sm:w-[100vw] sm:text-[1.7rem] sm:mt-[1.5rem] lg:w-[80%] h-[10vh] lg:mt-[35%] ml-[2rem] text-left text-[2.3rem] font-extrabold">
          <p className="sm:w-[100vw]">Rent a vehicle with ease</p>
        </div>
        <p className=" w-[70vw] text-left mt-[0.5rem]  text-[grey] lg:mt-[8%] ml-[2rem] lg:w-[75%]">
          Enhance your driving experience with the right rental to suit your
          transportation needs. With a wide range of vehicle models and sizes,
          our vehicles are reliable and in good condition.
        </p>
        <div className=" w-[90%] mb-[14rem] ml-[5%] lg:w-[44%] h-[8vh] bg-[orange] flex flex-row justify-center items-center rounded-[3px] gap-[1rem] text-[white] mt-[10%]">
          <a href="http://#">Rent a vehichle</a>
          <RiArrowDropRightLine className="fill-white w-[25px] h-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Rent_vehichle;
