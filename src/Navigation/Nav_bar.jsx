import React from "react";

const Nav_bar = () => {
  const nav = [
    "Hotel",
    "Dubai visa",
    "Vacation packages",
    "Become an afilation",
  ];

  return (
    <div>
      <div className="bg-[white] cursor-pointer w-[100%] h-[16vh] flex flex-row items-center justify-between overflow-hidden">
        <div>
          <a
            href="#"
            className="text-[white] text-[2rem] p-[10px] rounded-[100%] hover:bg-[transparent]  hover:text-[black] hover:border-[#0f0326] border-[1px] bg-[#01004d]  ml-[6rem] border-[#d1a9db]"
          >
            𝔐&𝔨
          </a>
        </div>
        <div className="flex flex-row gap-[0.45rem]  mr-[0.15rem] ">
          {nav.map((x, i) => (
            <a
              href="http://#"
              key={i}
              className="outline-none text-[#0f0326] rounded-[20%] text-[0.95rem] p-[0.85rem]"
            >
              {x}
            </a>
          ))}
        </div>
        <div className="flex flex-row gap-[1.5rem] items-center">
          <a
            href="http://#"
            className="outline-none text-[0.95rem] text-[#01004d] font-bold"
          >
            Login
          </a>
          <a
            href="http://#"
            className="outline-none text-[0.95rem]  p-[0.65rem] mb-[0.20rem] bg-[orange] rounded-[3px] mr-[5rem] font-bold px-[0.95rem] text-white"
          >
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav_bar;
