import React, { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";

const Sign_in = ({ navigate, darunnur }) => {
  const [user, setUser] = useState([]);
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const add = {
      content: e.target.name.value,
    };
    setUser(user.concat(add));
    e.target.reset();
  };
  return (
    <div className="flex flex-col ">
      <div className="w-[100%] h-[4rem] bg-white text-[2rem] text-[#010080] flex flex-row justify-center items-center font-extrabold">
        <p onClick={() => navigate("/")} className="cursor-pointer">
          <img src={darunnur} alt="" className="w-[100% h-[35px]" />
        </p>
      </div>
      <div className="bg-[#010080] flex flex-col justify-center items-center  w-[100vw] pb-[5rem]">
        <p className="text-[1rem] text-white my-[3%] font-extrabold">
          CREATE ACCOUNT
        </p>
        <form
          onSubmit={handleSubmit}
          className="accessibility bg-white w-[33vw] h-[100vh] rounded-[15px]"
        >
          <div className="bg-[#fafafa] w-[80%] h-[66vh] flex flex-col justify-center mt-[5rem] ">
            <label htmlFor="">First Name</label>
            <input type="text" />
            <label htmlFor="">Last Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" required /> <label htmlFor="">Password</label>{" "}
            <input type="text" required />
            {/* <BiShow /> */}
          </div>
          <div className="w-[100%] h-[50%] flex flex-col items-center">
            <div className="flex flex-row justify-between items-center text-[0.85rem] w-[80%] py-[20px]">
              <div className="w-[15%] flex flex-row items-center gap-[5px]">
                {!check ? (
                  <GrCheckbox
                    className=" w-[20px] h-[25px] "
                    onClick={() => setCheck(true)}
                  />
                ) : (
                  <BsFillCheckSquareFill
                    className="fill-[#010080] w-[20px] h-[25px] "
                    onClick={() => setCheck(false)}
                  />
                )}
              </div>
              <div>
                <p className="text-[0.75rem] text-[gray] leading-[15px]">
                  By proceeding, I acknowledge that I have read and agree to
                  Travelbeta’s Flight booking{" "}
                  <b className="text-[#010080]"> terms & conditions</b>
                </p>
              </div>
            </div>
            <div className="w-[100%]  flex flex-col justify-center items-center text-[0.90rem]">
              <button
                type="submit"
                className="w-[80%] p-[15px] rounded-[5px] bg-[#ffb712]  text-white font-extrabold outline-0 flex flex-row justify-center items-center gap-[0.5rem]"
              >
                Create Account
                <RiArrowRightSLine className=" w-[20px] h-[25px] " />
              </button>
              <p className="mt-[3%]">Already have an account</p>
              <p
                onClick={() => navigate("/Login")}
                className="text-[#010080] cursor-pointer font-extrabold"
              >
                Login
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;
