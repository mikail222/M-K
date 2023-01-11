import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className=" w-[98%] h-[40vh] flex flex-row  ml-[2%] justify-center  gap-[1rem]"
    >
      <div className=" w-[25%] h-[20%] flex flex-row  gap-[1.5rem]">
        <img
          src="https://m.media-amazon.com/images/I/71rsagJu5tL._AC_UY500_.jpg"
          alt=""
          className="w-[30%]  h-[18vh]"
        />
        <div className="flex flex-col text-left bg-white">
          <p className="text-[1.1rem] font-extrabold">Blue Ribbon</p>
          <p className="pr-[2rem] mt-[1rem] text-[grey]">
            We offer global Baggage protection on all flights
          </p>
        </div>
      </div>
      <div className=" bg-white w-[25%] h-[20%] flex flex-row gap-[1.5rem]">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/006/978/165/small/police-cap-illustration-on-a-white-background-vector.jpg"
          alt=""
          className="w-[30%]  h-[70%]"
        />
        <div className="flex flex-col text-left bg-white">
          <p className="text-[1.1rem] font-extrabold mb-[1rem]">
            Protocol Service{" "}
          </p>
          <p className="pr-[2rem] text-[grey]">
            Expedited and Smooth passage through Airport imigration
          </p>
        </div>
      </div>
      <div className=" bg-white w-[25%] h-[20%] flex flex-row gap-[1.5rem]">
        <img
          src="https://i.ibb.co/JBJQs9Z/47016de88442.png"
          alt=""
          className="w-[20%]  h-[15vh]"
        />
        <div className="flex flex-col text-left  bg-white">
          <p className="text-[1.1rem] font-extrabold">Visa Assistance</p>
          <p className="pr-[2rem] mt-[1rem] text-[grey]">
            all inclusive visa assistance in a timely,and secure manner
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
