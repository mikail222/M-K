import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { SiIata } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-[#01004d] w-[100%] h-[90vh] lg:h-[57vh] flex flex-col lg:flex-row  lg:justify-between gap-[3rem]">
        <div className="w-[70%] h-[45vh] lg:h-[40vh] flex flex-row lg:gap-[4rem] justify-center mt-[7%] lg:mr-[3rem] text-white text-[0.95rem]  gap-[50%] ml-[12%] lg:ml-0">
          <div className="flex flex-col leading-[2.5rem] text-[1rem] text-left lg:leading-[2rem]">
            <p className="  lg:text-[1rem] font-bold">Services</p>
            <a href="https://#">Flights</a>
            <a href="https://#">Hotels</a>
            <a href="https://#">Visa</a>
            <a href="https://#">Deals</a>
            <a href="https://#">Packages</a>
          </div>
          <div className="flex flex-col gap-[2rem] lg:flex-row ">
            <div className="flex flex-col text-[1rem] text-left leading-[2.5rem] lg:leading-[2rem]">
              <p className=" lg:text-[1rem] font-bold leading-[2rem]">
                Account
              </p>
              <a href="https://#">My Account</a>
              <a href="https://#"> Affilations</a>
            </div>
            <div className="flex flex-col text-[1rem] text-left  leading-[2.5rem] lg:leading-[2rem]">
              <p className="text-[1.7rem] lg:text-[1.5rem] font-bold">
                Darun-Nur
              </p>
              <a href="https://#">About us</a>
              <p
                onClick={() => navigate("/Contact")}
                className="cursor-pointer"
              >
                Contact us
              </p>
              <a href="https://#">Feedback</a>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[8rem] ml-[3rem] flex flex-col justify-center lg:mr-[5%] lg:items-left mt-[1rem] lg:mt-[6%]">
          <div className=" media ">
            <a
              href="http://"
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
              className="bg-white rounded-[100%] items-center p-[0.30rem]"
            >
              <GrFacebookOption className="w-[15px] h-[15px] fill-black" />
            </a>

            <a
              href="http://"
              target="_blank"
              title="Instagram"
              rel="noopener noreferrer"
              className="bg-white rounded-[100%] items-center p-[0.30rem]"
            >
              <BsInstagram className="w-[15px] h-[15px] fill-black" />
            </a>
            <a
              href="http://"
              target="_blank"
              title="Twitter"
              rel="noopener noreferrer"
              className="bg-white rounded-[100%] items-center p-[0.30rem]"
            >
              <FiTwitter className="w-[15px] h-[15px] fill-black" />
            </a>
          </div>
          <div className=" flex flex-row items-center  lg:ml-[3.5rem] mt-[1rem] lg:mt-[0rem]">
            <img
              src="https://i.pinimg.com/originals/e9/08/e8/e908e8086435c57e07c34d1a5e1ce45a.png"
              alt=""
              className="w-[7rem] lg:ml-[5rem]  h-[1.5rem] object-cover"
            />
            <SiIata className="fill-white w-[4vw]  h-[6vh] " />
          </div>
          <div className="text-left lg:text-center text-[0.85rem] inline-flex">
            <BiCopyright className="mt-[4px] fill-white lg:mr-[5px]" />
            <p className="text-[white]">
              2023 Darun-Nur.All Right Reserved | BN:3466674
            </p>
          </div>

          <p className="ml-[0.3rem] lg:mr-[1rem] text-[0.85rem] text-[white] text-left ">
            web design by: Mikail Abdulraheem
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
