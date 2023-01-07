import React from "react";

const Nav_bar = () => {
  const nav = ["𝓗𝓸𝓽𝓮𝓵", "𝓓𝓾𝓫𝓪𝓲 𝓥𝓲𝓼𝓪", "𝓥𝓪𝓬𝓪𝓽𝓲𝓸𝓷 𝓟𝓪𝓬𝓴𝓪𝓰𝓮𝓼", "𝓑𝓮𝓬𝓸𝓶𝓮 𝓪𝓷 𝓪𝓯𝓲𝓵𝓪𝓽𝓮"];

  return (
    <div>
      <div className="bg-[white] cursor-pointer w-[100%] h-[16vh] flex flex-row items-center justify-between">
        <div>
          <p className="text-[#d1a9db] w-[100%] text-[2rem] p-[10px] rounded-[100%] hover:bg-[transparent]  hover:text-[black] hover:border-none border-[1px] bg-[#0f0326]  ml-[2rem] border-[#d1a9db]">
            𝔐&𝔨
          </p>
        </div>
        <div className="flex flex-row gap-[0.45rem]  mr-[0.15rem] ">
          {nav.map((x, i) => (
            <button
              key={i}
              className="outline-none hover:bg-[#0f0326] text-[#0f0326] hover:text-[#d1a9db] rounded-[20%] text-[1.4rem] p-[1rem]"
            >
              {x}
            </button>
          ))}
        </div>
        <div className="flex flex-row gap-[1.5rem]">
          <button className="outline-none text-[1.4rem]  hover:text-[blue] text-[#0f0326]">
            𝐿𝑜𝑔𝒾𝓃
          </button>
          <button className="outline-none text-[1.4rem] border-[1px]  p-[0.75rem] radius-[8px] hover:text-[#0f0326] mb-[0.20rem] bg-[orange] rounded-[10px] mr-[2rem] text-white">
            𝓒𝓻𝓮𝓪𝓽𝓮 𝓐𝓬𝓬𝓸𝓾𝓷𝓽
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav_bar;
