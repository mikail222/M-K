import React from "react";
import logo from "../assets/darul-nur-low-resolution-logo-color-on-transparent-background.png";
import Nav_bar from "../Navigation/Nav_bar";

const Affilate = () => {
  const affilateman =
    "https://media.istockphoto.com/id/1298353587/photo/smiling-handsome-25s-middle-eastern-man-showing-okay-sign-holding-smartphone-isolated-over.jpg?s=612x612&w=0&k=20&c=FcFGgUIHFkFJCSDeF9ptk5DIFqVRTMkoye78TPD22ww=";
  return (
    <div>
      {" "}
      <Nav_bar />
      <div className="flex flex-row justify-around">
        <aside className="">
          <div className="mt-[20%] gap-[2rem]">
            <p className="text-[2.4rem] w-[25rem] leading-[3.2rem] font-semibold my-[2rem]">
              𝙶𝚎𝚝 𝚏𝚊𝚗𝚝𝚊𝚜𝚝𝚒𝚌 𝚙𝚛𝚘𝚏𝚒𝚝 𝚊𝚜 𝚊
            </p>
            <img src={logo} alt="" className="w-[15rem]" />
            <button
              type="button"
              className="bg-[#ffb712] text-white w-[55%] py-[1rem] rounded-[3px] my-[2rem] outline-0 text-[0.9rem] font-extrabold"
            >
              Get started
            </button>
          </div>
        </aside>
        <section className="">
          <div className="">
            <img src={affilateman} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Affilate;
