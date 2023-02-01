import React, { useState } from "react";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";

const Visa_assistance = () => {
  const date = new Date();
  const [check, setCheck] = useState(false);

  return (
    <div className="flex flex-row mt-[3%]">
      <aside className="w-[40%] h-[90vh] flex flex-col justify-center items-center gap-[2rem] ">
        <div className=" w-[90%] text-center leading-10">
          <p className="text-[2.3rem] font-extrabold">
            Travel Visa Assistance Program
          </p>
        </div>
        <div className="w-[75%] flex flex-col gap-4 text-[gray]">
          <p>
            M&K Travel & Tour team is made up of specialized and seasoned
            experts in visa processing.
          </p>
          <p>
            Our process includes profiling, helping you complete your visa
            application forms, vetting documents, getting appointment dates,
            conducting pre-interview sessions where applicable, with the aim of
            increasing your chances of visa success.
          </p>
          <p>
            We do not encourage immigration defaults and kindly note that
            issuance of visas is at the discretion of the embassy.
          </p>
          <p>
            Contact our visa consultants for all your Travel visa related
            questions.
          </p>
          <div className="flex flex-row">
            <p>Email :</p>
            <p>m&kvisa@gmail.com</p>
          </div>
          <div className="flex flex-row">
            <p>Phone :</p>
            <p>08124330616</p>
          </div>
        </div>
      </aside>
      <section className="w-[60%] border-l-[1px]">
        <div className="bg-[#010080] w-[85%] h-[7rem] ml-[5%] text-white flex flex-row justify-around items-center">
          <div className="leading-[2rem]">
            <p className="text-[1.4rem] font-extrabold">
              Need Visa Assistance Now ?
            </p>
            <p className="text-[0.85rem]">
              We’re bringing you a new level of comfort.
            </p>
          </div>
          <div className="30%">
            <BsCalendar2CheckFill className="w-[40px] h-[40px]" />
          </div>
        </div>
        <div>
          <div className="flex flex-col ml-[10%] justify-center pt-[10px] text-[0.85rem]">
            <p>Traveller's Information *</p>
            <p>
              Passengers details must be entered as it appears on the passport
              or ID.
            </p>
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
                <p className="text-[gray]">DEPARTURE DATE</p>
                <p className=" text-[0.95rem]">{date.toJSON().slice(0, 10)}</p>
              </div>
              <div>
                <FaRegCalendarAlt className="w-[25px] h-[20px] fill-[gray]" />
              </div>
            </div>
            <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[20px] border-b-[1px]">
              <div className="text-[0.70rem]">
                <p className="text-[gray]">RETURN DATE</p>
                <p className=" text-[0.95rem]">{date.toJSON().slice(0, 10)}</p>
              </div>
              <div>
                <FaRegCalendarAlt className="w-[25px] h-[20px] fill-[gray]" />
              </div>
            </div>
            <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[20px] border-b-[1px]">
              <div className="text-[0.70rem]">
                <p className="text-[gray]">Destination Country</p>
                <input type="text" required />
              </div>
            </div>
            <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[20px] border-b-[1px]">
              <div className="text-[0.70rem]">
                <p className="text-[gray]">Passport Country</p>
                <input type="text" required />
              </div>
            </div>
            <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[10px] border-b-[1px]">
              <div className="text-[0.70rem]">
                <p className="text-[gray]">PASSPORT NUMBER</p>
                <input type="text" required />
              </div>
            </div>
            <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[10px] border-b-[1px]">
              <div className="text-[0.70rem]">
                <p className="text-[gray]">MESSAGE</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="outline-0 w-[48vw]"
                ></textarea>
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
              <div>
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
      </section>
    </div>
  );
};

export default Visa_assistance;
