import React from "react";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";
import { BiShow } from "react-icons/bi";

const Login = ({ navigate }) => {
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const add = {
      content: e.target.name.value,
    };
    setUser(user.concat(add));
    e.target.reset();
  };
  return (
    <div className="flex flex-col">
      <div className="w-[100%] h-[4rem] bg-white text-[2rem] text-[#010080] flex flex-row justify-center items-center font-extrabold">
        <p onClick={() => navigate("/")} className="cursor-pointer">
          {" "}
          𝔐&𝔨 Travels & Tour
        </p>
      </div>
      <div className="bg-[#010080] flex flex-col justify-center items-center  w-[100vw] h-[100vh]">
        <p className="text-[1rem] text-white my-[3%] font-extrabold">LOG IN</p>
        <form
          onSubmit={handleSubmit}
          className="accessibility bg-white w-[33vw] h-[80vh] rounded-[15px]"
        >
          <div className="bg-[#fafafa] w-[80%] h-[36vh] flex flex-col justify-center mt-[5rem] ">
            <label htmlFor="">Email</label>
            <input type="text" required /> <label htmlFor="">Password</label>{" "}
            <input type="text" required />
            {/* <BiShow /> */}
          </div>
          <div className="w-[100%] h-[50%] flex flex-col items-center">
            <div className="flex flex-row justify-between items-center text-[0.85rem] w-[80%] py-[20px]">
              <div className="w-[50%] flex flex-row items-center gap-[5px]">
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
                <p className="text-[0.90rem] ml-[5px]">Remember me</p>
              </div>
              <div>
                <p className="text-[#010080] cursor-pointer">
                  Forget password?
                </p>
              </div>
            </div>
            <div className="w-[100%]  flex flex-col justify-center items-center text-[0.90rem]">
              <button
                type="submit"
                className="w-[80%] p-[15px] rounded-[5px] bg-[#ffb712]  text-white font-extrabold outline-0 flex flex-row justify-center items-center gap-[0.5rem]"
              >
                Login
                <RiArrowRightSLine className=" w-[20px] h-[25px] " />
              </button>
              <p className="mt-[3%]">Don't have an account</p>
              <p
                onClick={() => navigate("/Sign_in")}
                className="text-[#010080] cursor-pointer font-extrabold"
              >
                Create account
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
