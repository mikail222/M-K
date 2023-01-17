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
  const [economy, setEconomy] = useState();
  const [firstClass, setFirstclass] = useState();
  const [business, setBusiness] = useState();
  const [premium, setPremium] = useState();
  const [display, setDisplay] = useState([
    economy,
    firstClass,
    business,
    premium,
  ]);

  const toggleClass = () => {
    switch (display) {
      case economy:
        setEconomy("Economy");
        break;
      case firstClass:
        setFirstclass("First Class");
        break;
      case business:
        setBusiness("Business Class");
        break;
      case premium:
        setPremium("Premium Economy");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data);
    });
  }, []);
  console.log(allCountries);

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
    <div className="w-[100%] h-[100vh]">
      <div className="brand flex flex-col justify-center items-center w-[100%] h-[50vh]">
        <div className="w-[90%] h-[25vh] mt-[15rem] ">
          <h1 className="text-[4rem] text-[white] flex flex-row justify-left items-left mb-[1.7rem] tracking-[5px] font-extrabold">
            𝐆𝐨𝐢𝐧𝐠 s𝐨𝐦𝐞𝐰𝐡𝐞𝐫𝐞?
          </h1>
          <div className="w-[100%] h-[37vh] bg-[#01004d] ">
            <div className="w-[100%] h-[30%] flex flex-row items-center justify-between bg-white ">
              <div className=" w-[60%] flex flex-row ml-[2rem]">
                <button
                  className="flex flex-row justify-center items-center gap-[0.5rem] focus:outline-1 border-[#01004d] rounded-[3px] w-[20%] p-[6px] "
                  onClick={(e) =>
                    setHotelDetails(false) || setFlightDetails(true)
                  }
                >
                  <RiPlaneFill className="fill-[#0f0326] " />{" "}
                  <p className="text-[#0f0326]  text-[1rem] font-bold">
                    Flights
                  </p>
                </button>
                <button
                  className="w-[8rem] flex flex-row gap-[0.5rem] justify-center items-center ml-[1rem]  focus:outline-1  outline-[#0f0326] "
                  onClick={(e) =>
                    setFlightDetails(false) || setHotelDetails(true)
                  }
                >
                  <MdHome className="fill-[black]" />
                  <p className="text-[black] text-[1rem] font-bold">Hotels</p>
                </button>
              </div>
              <div className=" w-[22%] flex flex-row  items-center gap-[1rem] ">
                <IoMdCheckmarkCircleOutline className="fill-[orange] " />
                <p className="  text-[#0f0326] text-[0.75rem] ">
                  We offer the best deals in the industry!
                </p>
              </div>
            </div>
            {flightDetails ? (
              <div className="w-[100%] h-[20%] flex flex-row gap-[2rem] items-center">
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

                <button className="flex flex-row gap-[0.45rem] items-center">
                  {/* <div className="flight_container  mt-[20%]"> */}
                  <div>
                    {display.map((x, i) => (
                      <div key={i}>
                        <p>{console.log(x)}</p>
                      </div>
                    ))}
                  </div>
                  <IoMdArrowDropdown className="fill-white" />
                </button>
              </div>
            ) : (
              <p className="w-[100%] h-[6vh]"></p>
            )}
            {flightDetails ? <Flight /> : hotelDetails ? <Hotel /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brand;
