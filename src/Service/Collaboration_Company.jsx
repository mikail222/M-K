import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import iata from "../assets/kisspng-international-air-transport-association-airline-tr-travel-agency-5ac2ffad33e078.2916961215227288772125.png";

const Collaboration_Company = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="slide-up" className="w-[100%] h-[30vh]">
      <div className="flex flex-row gap-[2rem] mt-[6%] justify-center  items-center">
        <img src={iata} alt="" className="w-[8%] h-[9vh]  mr-[1rem]" />
        <img
          src="https://pbs.twimg.com/profile_images/1324492926542598146/tQCrV1h0_400x400.jpg"
          alt=""
          className="w-[auto] h-[9vh] rounded-[20%]"
        />
        <img
          src="https://roi4cio.com/uploads/roi/company/Amadeus_Russia.jpg"
          alt=""
          className="w-[15%] h-[17vh]"
        />
        <img
          src="https://tukuz.com/wp-content/uploads/2020/10/flutterwave-logo-vector.png"
          alt=""
          className="w-[15%] h-[17vh]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Interswitch_logo.svg/2560px-Interswitch_logo.svg.png"
          alt=""
          className="w-[15%] h-[8vh]"
        />
      </div>
    </div>
  );
};

export default Collaboration_Company;
