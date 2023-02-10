import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiArrowRightSLine } from "react-icons/ri";
import Nav_bar from "../Navigation/Nav_bar";
import Footer from "../Footer/Footer";
import Mail from "./Mail";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  const date = new Date();
  const [check, setCheck] = useState(false);

  return (
    <div className="contact">
      <Nav_bar />
      <div className="socialMedia"></div>
      <div className="flex flex-row justify-around">
        <aside>
          <div
            data-aos="fade-zoom-in"
            className="flex flex-col items-center  rounded-[15px] w-[40vw] h-[60vh] shadow-md mt-[30%] bg-white border-[2px]"
          >
            <div className="mt-[10%]">
              <CiLocationOn className="w-[40px] h-[40px] fill- [#ffb712] animate-bounce ml-[2rem]" />
              <div className="rounded-[50%] border-[1px] p-[0.5rem] px-[3rem] bg-[#ffb712] animate-ping"></div>
            </div>
            <div className="text-center leading-[2rem] tracking-[0.25rem] font-serif">
              <h1 className="text-[1.7rem] py-[1rem] font-bold">
                Nigeria Office
              </h1>
              <p>Address: 7B iwaro Lane Isolo-Akure </p>
              <p> Ondo State.Nigeria</p>
              <p>Phone: +234-8124330616</p>
              <p>Email: darunnur@gmail.com </p>
            </div>
          </div>
        </aside>
        <section>
          <div className="mt-[5rem]">
            <p className="text-[2.5rem] font-bold font-serif">Drop a Message</p>
          </div>
          <form
            data-aos="fade-zoom-in"
            // data-aos-offset="200"
            // data-aos-easing="ease-in-sine"
            className="travel flex flex-col justify-center rounded-[15px] w-[40vw] h-[auto] shadow-md my-[10%] bg-white border-[2px]"
          >
            <label htmlFor="">FIRST NAME</label>
            <input type="text" />
            <label htmlFor="">LAST NAME</label>
            <input type="text" /> <label htmlFor="">EMAIL</label>
            <input type="text" />
            <label htmlFor="">Phone</label>
            <input type="text" />
            <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[10px]">
              <div className="text-[0.70rem]  mb-[1.5rem]">
                <p className="text-[gray] mb-[1rem]">MESSAGE</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="outline-0 w-[32vw] text-[1rem] mb-[1rem]"
                  placeholder="leave a message here..."
                ></textarea>
              </div>
            </div>{" "}
            <button
              type="submit"
              className="w-[80%] p-[15px] rounded-[5px] bg-[#ffb712]  text-white font-extrabold outline-0 flex flex-row justify-center items-center gap-[0.5rem] ml-[10%] mb-[3rem]"
            >
              Submit
              <RiArrowRightSLine className=" w-[20px] h-[25px] " />
            </button>
          </form>
        </section>
      </div>
      <Mail />
      <Footer />
    </div>
  );
};

export default Contact;
