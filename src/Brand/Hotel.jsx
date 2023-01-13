import React, { useState } from "react";
import { BiHotel } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { RiArrowDropRightLine } from "react-icons/ri";

const Hotel = () => {
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(false);
  const [city, setCity] = useState(" ");
  const date = new Date();
  const days = new Date();
  days.setDate(days.getDate() + 3);

  console.log(room);

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleClick = () => {
    e.preventDefault();
    const add = {};
  };
  return (
    <div>
      <div className="w-[100%] h-[30vh] flex flex-row gap-[0.25rem]  justify-center mt-[1rem]">
        <div className="details flex flex-row gap-[1rem] justify-start  items-center">
          <BiHotel className="fill-[lightgray] w-[25px] h-[25px] ml-[1rem]" />
          <form className="flex flex-col justify-center items-center">
            <label htmlFor="" className="text-[grey] text-[0.75rem] mr-[9rem]">
              Going to?
            </label>
            <input
              type="text"
              placeholder="city or hotel name"
              className="placeholder outline-none cursor-pointer"
            />
          </form>
        </div>
        <div className="details flex flex-row gap-[0.65rem] justify-start items-center">
          <BsFillPersonFill className="fill-[lightgray] w-[20px] h-[25px] ml-[1rem]" />
          <form className="flex flex-col justify-center items-center">
            <label htmlFor="" className="text-[grey] text-[0.75rem] mr-[6rem] ">
              Rooms and guests
            </label>
            <div className="hotel_dropdown">
              <button
                type="button"
                onClick={(e) => setRoom(true)}
                className="placeholder outline-none text-[black] mr-[6rem]"
              >
                <p className="text-[0.85rem] font-extrabold">
                  1 Room,{adult + children} Guest
                </p>
              </button>
              {room ? (
                <div className="hotel_container">
                  <div>
                    <div className="flex flex-row justify-around mb-[2rem] text-[#01004d] mt-[8%] items-center">
                      <p className="text-[0.85rem] text-[gray]">Room </p>
                      <div className="flex flex-row  border-[#01004d] border-[2px] px-[0.78rem] gap-[0.5rem]">
                        <p className="text-[0.78rem]">Add room</p>
                        <p className="text-[0.78rem]">+</p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-around items-center gap-[1rem]">
                      <p className="text-[0.85rem] ">Adult</p>
                      <div className="flex flex-row-reverse gap-[1.5rem]  items-center">
                        <button
                          type="button"
                          className="a bg-[#01004d]"
                          onClick={(e) => setAdult((p) => (!p ? 1 : p + 1))}
                        >
                          +
                        </button>
                        <p className="text-[0.75rem]">{adult}</p>
                        <button
                          type="button"
                          className="a bg-[gray]"
                          onClick={(e) => setAdult((d) => (!d ? 1 : d - 1))}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-row justify-around mt-[1rem] items-center">
                      <div className="flex flex-col leading-[13px]">
                        <p className="text-[0.85rem] ">Children</p>
                        <p className="text-[0.65rem] text-[gray]">2 - 11 yrs</p>
                      </div>
                      <div className="flex flex-row-reverse items-center gap-[1.5rem]">
                        <button
                          type="button"
                          className="a bg-[#01004d]"
                          onClick={(e) => setChildren((p) => p + 1)}
                        >
                          +
                        </button>
                        <p className="text-[0.75rem]">{children}</p>
                        <button
                          type="button"
                          className="a bg-[gray]"
                          onClick={(e) => setChildren((d) => (!d ? 0 : d - 1))}
                        >
                          <p className="text-[1rem]">-</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-row mt-[20%] mr-[8%] gap-[0.5rem] justify-end">
                      <button
                        type="button"
                        className="text-[#01004d] outline-none"
                        onClick={(e) => setRoom(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="bg-[orange] px-[18px] p-[8px] text-white rounded-[4px] outline-none"
                        onClick={(e) => setRoom(false)}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
        <div className="w-[27%] h-[40%] flex flex-row justify-center  items-center gap-[2rem] bg-white  rounded-[3px]">
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
        <div className="w-[15%] h-[40%] rounded-[5px] bg-[orange] flex flex-row justify-center  items-center">
          <p className="text-white">Search Hotel</p>
          <RiArrowDropRightLine className="fill-white ml-[1.2rem] w-[25px] h-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
