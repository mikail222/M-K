import React, { useState } from "react";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";
import Nav_bar from "../Navigation/Nav_bar";
import Footer from "../Footer/Footer";
import satisfaction from "../assets/51-510761_100-satisfaction-guarantee-label-removebg.png";
import Mail from "../Service/Mail";

const Affilate_Registration = () => {
  const [check, setCheck] = useState(false);

  return (
    <div>
      <Nav_bar />
      <div className="flex flex-col justify-center items-center">
        <div className="w-[50vw] flex flex-col justify-center items-center  border-[1px] mt-[7%] shadow-lg pb-[5%]">
          <div className="bg-[#010080] w-[50vw] h-[7rem]  text-white flex flex-row justify-around items-center ">
            <div className="leading-[2rem]">
              <p className="text-[1.4rem] font-extrabold">
                New Affiliate Registration
              </p>
              <p className="text-[0.85rem]">
                Become an affiliate and get amazing rewards.
              </p>
            </div>
            <div className="30%">
              <BsCalendar2CheckFill className="w-[40px] h-[40px]" />
            </div>
          </div>
          <div className="affilateInput">
            <div className="flex flex-col ml-[10%] justify-center pt-[10px] text-[0.85rem]">
              <p>Affiliate's Information *</p>
              <p>Affilate details are properly keep for Documentation.</p>
            </div>
            <form action="" className="travel flex flex-col justify-center ">
              <label htmlFor="">FIRST NAME</label>
              <input type="text" />
              <label htmlFor="">LAST NAME</label>
              <input type="text" /> <label htmlFor="">EMAIL</label>
              <input type="text" />
              <label htmlFor="">PASSWORD</label>
              <input type="text" />
              <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[20px] border-b-[1px]">
                <div className="text-[0.70rem]">
                  <p className="font-bold text-[0.8rem]">Other Information</p>
                  <p className="text-[gray]">Company Name</p>
                  <input type="text" />
                </div>
              </div>
              <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[20px] border-b-[1px]">
                <div className="text-[0.70rem]">
                  <p className="text-[gray]">Phone Number</p>
                  <input type="text" />
                </div>
              </div>
              <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[10px] border-b-[1px]">
                <div className="text-[0.70rem]">
                  <p className="text-[gray]">Address</p>
                  <input type="text" required />
                </div>
              </div>{" "}
              <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[10px] border-b-[1px]">
                <div className="text-[0.70rem]">
                  <p className="text-[gray]">City</p>
                  <input type="text" required />
                </div>
              </div>{" "}
              <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[10px] border-b-[1px]">
                <div className="text-[0.70rem]">
                  <p className="text-[gray]">State</p>
                  <input type="text" required />
                </div>
              </div>
              <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[10px] border-b-[1px]">
                <div className="text-[0.70rem]">
                  <p className="text-[gray]">Country</p>
                  <input type="text" />
                </div>
              </div>{" "}
              <div className="flex flex-row justify-center items-center gap-[1rem] text-[0.85rem] w-[80%] py-[20px] ml-[10%]">
                <div className=" flex flex-row items-center">
                  {!check ? (
                    <GrCheckbox
                      className=" w-[20px] h-[25px] "
                      onClick={() => setCheck(true)}
                    />
                  ) : (
                    <BsFillCheckSquareFill
                      className="fill-[#010080] w-[20px] h-[25px] "
                      onClick={() => setCheck(false)}
                    />
                  )}
                </div>
                <div className="my-[20px]">
                  <p className="text-[0.75rem] text-[gray] leading-[15px]">
                    By proceeding, I acknowledge that I have read and agree to
                    Travelbeta’s Flight booking{" "}
                    <b className="text-[#010080]"> terms & conditions</b>
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="w-[80%] p-[15px] rounded-[5px] bg-[#ffb712]  text-white font-extrabold outline-0 flex flex-row justify-center items-center gap-[0.5rem] ml-[10%]"
              >
                Submit
                <RiArrowRightSLine className=" w-[20px] h-[25px] " />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center h-[60vh]  my-[10%] gap-[4rem]">
          <div className="flex flex-row justify-center items-center  w-[40%] h-[25vh]">
            <img src={satisfaction} alt="" className="w-[20vw]" />
            <div>
              <p className="text-[1.2rem] font-bold my-[0.5rem]">
                Satisfaction Guarantee
              </p>
              <p className="w-[90%] text-[0.9rem]">
                Receive a refund on your travel insurance premium within 10 days
                of purchase.
              </p>
            </div>
          </div>
          <div className=" bg-[#96ecd3] w-[40%] h-[27vh]">
            <div className="m-[1.2rem]">
              <p className="font-extrabold">Need Darun nur help?</p>
              <p className="my-[0.5rem] w-[24rem] font-thin">
                We would be more than happy to help you. Our team advisor are
                24/7 at your service to help you.
              </p>
              <p>Email: Darunnur@gmail.com</p>
              <p className="font-extrabold">Phone: 08124330616</p>
            </div>
          </div>
        </div>
      </div>
      <Mail />
      <Footer />
    </div>
  );
};

export default Affilate_Registration;
