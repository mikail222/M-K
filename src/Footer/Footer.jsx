import React from "react";
import { SiFacebook } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <div></div>
      <div className="bg-[#0f0326] flex flex-row h-[100%]">
        <div className="media ">
          <a
            href="http://"
            target="_blank"
            title="Facebook"
            rel="noopener noreferrer"
          >
            <SiFacebook
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                fill: "rgb(255,255,255,0.9)",
              }}
              className="facebook"
            />
          </a>

          <a
            href="http://"
            target="_blank"
            title="Twitter"
            rel="noopener noreferrer"
          >
            <FiTwitter
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                className: "twitter",
                borderRadius: "50%",
                fill: "white",
              }}
            />
          </a>

          <a
            href="http://"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <BsInstagram
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                className: "instagram",
                fill: "rgb(255,255,255,0.9)",
              }}
            />
          </a>

          <a
            href="http://"
            target="_blank"
            title="Email"
            rel="noopener noreferrer"
          >
            <AiOutlineMail
              style={{
                color: "black",
                width: "30px",
                height: "30px",
                className: "mail",
                borderRadius: "100%",
                fill: "white",
              }}
              className=" p-[2px] "
            />
          </a>

          <a
            href="http://"
            target="_blank"
            title="whatsApp"
            rel="noopener noreferrer"
          >
            <BsWhatsapp
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                className: "whatsApp",
                borderRadius: "50%",
                fill: "white",
              }}
            />
          </a>

          <a
            href="http://"
            target="_blank"
            title="+234(0)8144632165"
            rel="noopener noreferrer"
          >
            <MdPhoneInTalk
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                className: "contact",
                fill: "green",
              }}
              className="hover:fill-white"
            />
          </a>
        </div>
        <div className="copyright flex flex-col items-center mb-[1rem]">
          <div className="mt-[2.2rem] text-center inline-flex">
            <BiCopyright className="mt-[4px] fill-white mr-[5px]" />
            <p className="text-[#d1a9db]">
              2023 M & K.All Right Reserved | BN:3466674
            </p>
          </div>
          <div className="flex flex-row">
            <p className="ml-[1rem] mr-[1rem] text-[#d1a9db]">
              web design by: Mikail Abdulraheem
            </p>
            <a
              href="http://"
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
              <SiFacebook
                style={{
                  color: "black",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  fill: "rgb(255,255,255,0.5)",
                  marginRight: "1rem",
                }}
                className="facebook"
              />
            </a>
            <a
              href="http://abdulraheemmukaila6@gmail.com"
              target="_blank"
              title="Email"
              rel="noopener noreferrer"
            >
              <AiOutlineMail
                style={{
                  color: "black",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  fill: "rgb(255,255,255,0.5)",
                }}
                className="mail"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
