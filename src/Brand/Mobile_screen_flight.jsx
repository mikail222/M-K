import React, { useEffect, useState } from "react";
import { RiPlaneFill } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import axios from "axios";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Flight_Dropdown from "./Flight_Dropdown";

const Mobile_screen_flight = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [flightDetails, setFlightDetails] = useState(true);
  const [hotelDetails, setHotelDetails] = useState(true);
  const [booking, setBooking] = useState(false);
  const [totalPassanger, setTotalpassanger] = useState(1);
  const [selecDisplay, setSelectDisplay] = useState(null);
  return (
    <div>
      {" "}
      {flightDetails ? (
        <div className="  lg:w-[100%] h-[20%] flex flex-row gap-[2rem] items-center">
          <div className="flex flex-row gap-[0.5rem] items-center ml-[3rem] cursor-pointer">
            <RiArrowLeftRightFill className="fill-white" />
            <p className="text-[0.75rem] text-white">Round Trip</p>
            <IoMdArrowDropdown className="fill-white" />
          </div>

          <button
            onClick={(e) => setBooking(true)}
            type="button"
            className="flex flex-row gap-[0.45rem] outline-none items-center"
          >
            <BsFillPersonFill className="fill-white" />
            <p className="text-[0.75rem]  text-white">{totalPassanger}</p>
            <IoMdArrowDropdown className="fill-white" />{" "}
          </button>
          {booking ? (
            <Flight_Dropdown
              setTotalpassanger={setTotalpassanger}
              setBooking={setBooking}
            />
          ) : (
            ""
          )}
          <p className="text-white">Economy</p>
          <IoMdArrowDropdown className="fill-white" />
        </div>
      ) : (
        <p className="w-[100%] h-[6vh]"></p>
      )}
      {flightDetails ? <Flight /> : hotelDetails ? <Hotel /> : ""}
    </div>
  );
};

export default Mobile_screen_flight;
