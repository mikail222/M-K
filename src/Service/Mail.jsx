import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import speaker from "../assets/—Pngtree—vector speaker icon_3779063.png";

const Mail = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const [city, setCity] = useState(" ");

  const handleClick = (e) => {
    e.preventDefault();

    const add = {
      content: e.target.name.value,
    };
    setCity(city.concat(add));
    e.target.reset();
  };
  return (
    <div
      data-aos="fade-up"
      className="bg-[#d7e7ff] mail border-[#d1a9db] w-[100%] h-[40vh] flex flex-row  items-center"
    >
      <div className="flex flex-row w-[40%] ml-[13%]">
        <img
          src={speaker}
          alt=""
          className="w-[20%] mt-[2%] origin-bottom rotate-[-28deg] h-[17vh]"
        />
        <div className=" text-[1.3rem] font-bold text-left mt-[6%] ">
          <p>Want to get the latest </p>
          <p> travel news and deals?</p>
          <p className="w-[90%] text-[0.75rem] mt-[0.5rem] text-[grey] leading-[14px] font-thin">
            Enter your email and we'll send them your way.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleClick}
        className="w-[45%] flex flex-row gap-[0.5rem]"
      >
        <input
          type="text"
          name="mail"
          placeholder="Your email..."
          className="w-[60%] h-[9vh] pl-[30px] bg-[lightgrey] outline-none rounded-[3px]"
        />
        <button
          type="submit"
          className="w-[24%] rounded-[3px] h-[9vh] bg-[orange] outline-none text-[white]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Mail;
