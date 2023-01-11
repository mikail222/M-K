import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mail = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className=" mail border-[#d1a9db] w-[100%] h-[40vh] flex flex-row justify-around  items-center"
    >
      <div className="flex flex-row gap-[0.5rem]  w-[50%]">
        <img
          src="https://images.pond5.com/blue-color-hand-speaker-wave-footage-164461718_iconl.jpeg"
          alt=""
          className="w-[35%] h-[24vh]"
        />
        <div className="ml-[5%] text-[1.3rem] font-bold text-left mt-[4%] ">
          <p>Want to get the latest </p>
          <p> travel news and deals?</p>
          <p className="w-[90%] text-[0.85rem] mt-[0.5rem] text-[grey]  ">
            Enter your email and we'll send them your way.
          </p>
        </div>
      </div>

      <form className="w-[50%] flex flex-row gap-[0.5rem]">
        <input
          type="text"
          placeholder="Your email..."
          className="w-[60%] h-[9vh] pl-[15px] bg-[lightgrey] outline-none rounded-[3px]"
        />
        <button className="w-[24%] rounded-[3px] h-[9vh] bg-[orange]  outline-none text-[white]">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Mail;
