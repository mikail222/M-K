import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      className=" mail border-[#d1a9db] w-[100%] h-[40vh] flex flex-row  items-center"
    >
      <div className="flex flex-row w-[40%] ml-[10%]">
        <img
          src="https://images.pond5.com/blue-color-hand-speaker-wave-footage-164461718_iconl.jpeg"
          alt=""
          className="w-[35%] h-[24vh]"
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
