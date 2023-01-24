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

const Brand = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [flightDetails, setFlightDetails] = useState(true);
  const [hotelDetails, setHotelDetails] = useState(true);
  const [booking, setBooking] = useState(false);
  const [totalPassanger, setTotalpassanger] = useState(1);
  const [selecDisplay, setSelectDisplay] = useState(null);
  // const [display, setDisplay] = useState([
  //   {
  //     title: "Economy",
  //     content: "Economy1",
  //     id: 1,
  //   },
  //   {
  //     title: "Premium Economy",
  //     content: "Premium  Economy2",
  //     id: 2,
  //   },
  //   {
  //     title: "Business Class",
  //     content: "Business Class3",
  //     id: 3,
  //   },
  //   {
  //     title: "First Class",
  //     content: " First Class4",
  //     id: 4,
  //   },
  // ]);
  const [isActive, setIsactive] = useState();

  // const menu = display.map((title) => title.title);
  // console.log(menu)

  // const handleClick = (e) => {
  //   switch (display) {
  //     case economy:
  //       console.log("Economy");
  //       e.target.className = "text-[blue]";
  //       break;
  //     case firstClass:
  //       console.log("First Class");
  //       e.target.className = "text-[blue]";
  //       break;
  //     case business:
  //       console.log("Business Class");
  //       e.target.className = "text-[blue]";
  //       break;
  //     case premium:
  //       console.log("Premium Economy");
  //       e.target.className = "text-[blue]";
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const filteredCountry = allCountries.filter(({ capital, flags }) => {
    capital, flags;
  });
  const day = new Date();

  var i = 0;
  const brandImg = document.getElementsByClassName("brandSlide");
  const changeImg = () => {
    if (i > img - 1) {
      i = 0;
    }
    brandImg.src = picture[i];
    i++;
    setTimeout("changeImg()", 1000);
  };

  return (
    <div className="w-[100%] h-[100vh] lg:w-[100%] lg:h-[100vh] z-[1] lg:mt-[0%]">
      <div className="brand lg:flex flex-col lg:justify-center lg:items-center w-[100%] lg:h-[50vh]">
        <div className="lg:w-[90%] lg:h-[25%] lg:mt-[15rem] ">
          <h1 className="hidden text-[4rem] text-[white] lg:flex flex-row justify-left items-left mb-[1.7rem] tracking-[5px] font-extrabold">
            𝐆𝐨𝐢𝐧𝐠 s𝐨𝐦𝐞𝐰𝐡𝐞𝐫𝐞?
          </h1>
          <div className="w-[100%] h-[100%] lg:w-[100%] lg:h-[45vh] bg-[#01004d] ">
            <div className="flex flex-col lg:h-[30%] lg:flex lg:flex-row items-center justify-between bg-white ">
              <div className="bg-[#f2f2ff] lg:bg-white w-[100%] h-[10vh] lg:w-[60%] flex flex-row justify-center items-center lg:ml-[0.5rem]">
                <button
                  className="flex flex-row justify-center items-center gap-[0.5rem] lg:focus:outline-1 border-[#01004d] rounded-[3px] w-[8rem] p-[6px] bg-[red]"
                  onClick={(e) =>
                    setHotelDetails(false) || setFlightDetails(true)
                  }
                >
                  <RiPlaneFill className="fill-[#0f0326] w-[15px] h-[20px]" />{" "}
                  <p className="text-[#0f0326]  text-[0.90rem] font-bold">
                    FLIGHTS
                  </p>
                </button>
                <button
                  className="w-[8rem] flex flex-row gap-[0.5rem] justify-center items-center ml-[1rem]  focus:outline-1  outline-[#0f0326] p-[6px] bg-[blue]"
                  onClick={(e) =>
                    setFlightDetails(false) || setHotelDetails(true)
                  }
                >
                  <MdHome className="fill-[black] w-[15px] h-[20px]" />
                  <p className="text-[black] text-[0.90rem] font-bold">
                    HOTELS
                  </p>
                </button>
              </div>
              <div className="hidden md:hidden w-[22%] lg:flex flex-row  items-center gap-[1rem] ">
                <IoMdCheckmarkCircleOutline className="fill-[orange] " />
                <p className="  text-[#0f0326] text-[0.75rem] ">
                  We offer the best deals in the industry!
                </p>
              </div>
            </div>
            {flightDetails ? (
              <div className=" hidden lg:w-[100%] lg:h-[20%] lg:flex flex-row gap-[2rem] items-center">
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

                <div className="flex flex-row gap-[0.45rem] items-center">
                  {/* {display.map((title, id) => (
                    <div
                      key={title.title}
                      className="flight_container  mt-[20%]"
                    >
                      <button onClick={() => setSelectDisplay(display)}>
                        {title.title}
                      </button>
                    </div>
                  ))} */}
                  <p className="text-white text-[0.85rem]">Economy</p>
                  <IoMdArrowDropdown className="fill-white" />
                </div>
              </div>
            ) : (
              <p className="w-[100%] h-[6vh]"></p>
            )}
            {flightDetails ? <Flight /> : hotelDetails ? <Hotel /> : ""}
            <div className="details w-[90%] h-[12vh] bg-[transparent] lg:hidden lg:w-[22%] flex flex-row  justify-center items-center gap-[1rem] ">
              <IoMdCheckmarkCircleOutline className="fill-[orange] " />
              <p className="text-white  lg:text-[#0f0326] text-[0.75rem] ">
                We offer the best deals in the industry!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brand;
