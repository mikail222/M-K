import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { SiIata } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#01004d] flex flex-row w-[100%] h-[100%] justify-between gap-[6rem]">
        <div className="w-[70%] h-[43vh] flex flex-row gap-[4rem] justify-center mt-[7%] mr-[3rem] text-white text-[0.95rem]">
          <div className="flex flex-col  text-left leading-[2rem]">
            <p className="text-[1rem] font-bold">Services</p>
            <a href="https://#">Flights</a>
            <a href="https://#">Hotels</a>
            <a href="https://#">Visa</a>
            <a href="https://#">Deals</a>
            <a href="https://#">Packages</a>
          </div>
          <div className="flex flex-col  text-left leading-[2rem]">
            <p className="text-[1rem] font-bold">Account</p>
            <a href="https://#">My Account</a>
            <a href="https://#"> Affilations</a>
          </div>
          <div className="flex flex-col  text-left leading-[2rem]">
            <p className=" text-[1.5rem] font-bold">𝔐&𝔨</p>
            <a href="https://#">About us</a>
            <a href="https://#">Contact</a>
            <a href="https://#">Feedback</a>
          </div>
        </div>
        <div className="w-[30%] h-[8rem] flex flex-col mr-[5%] items-right mt-[6%]">
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
          <div className=" flex flex-row items-center mt-[2rem] ml-[3.5rem]">
            <img
              src="https://i.pinimg.com/originals/e9/08/e8/e908e8086435c57e07c34d1a5e1ce45a.png"
              alt=""
              className="w-[7rem] ml-[5rem]  h-[1.5rem] object-cover"
            />
            <SiIata className="fill-white w-[4vw]  h-[6vh] " />
          </div>
          <div className=" text-center text-[0.85rem] inline-flex">
            <BiCopyright className="mt-[4px] fill-white mr-[5px]" />
            <p className="text-[white]">
              2023 M & K.All Right Reserved | BN:3466674
            </p>
          </div>

          <p className="ml-[1rem] mr-[1rem] text-[0.85rem] text-[white] text-left ">
            web design by: Mikail Abdulraheem
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
