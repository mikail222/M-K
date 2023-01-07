import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Rent_vehichle = () => {
  return (
    <div className="w-[100%] h-[90vh] flex flex-row justify-center">
      <div className="w-[65%] flex flex-col justify-center items-center ">
        <img
          src="https://www.abettervaluecarhire.com.au/wp-content/uploads/2022/05/2014-2015-8-Seat-Hyundai-Imax-Auto.jpg"
          alt=""
          className="w-[90%] h-[85%] mt-[4rem]"
        />
      </div>
      <div className="w-[30%] flex flex-col justify-left items-left text-left">
        <div className=" w-[80%] h-[10vh] mt-[35%] text-left text-[2.3rem] font-extrabold">
          <p>Rent a vehicle</p>
          <p className="mt-[5%]"> with ease</p>
        </div>
        <p className="text-[grey] mt-[8%] w-[75%]">
          Enhance your driving experience with the right rental to suit your
          transportation needs. With a wide range of vehicle models and sizes,
          our vehicles are reliable and in good condition.
        </p>
        <div className="w-[44%] h-[8vh] bg-[orange] flex flex-row justify-center items-center rounded-[3px] gap-[1rem] text-[white] mt-[10%]">
          <a href="http://#">Rent a vehichle</a>
          <RiArrowDropRightLine className="fill-white w-[25px] h-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Rent_vehichle;
