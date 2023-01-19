import React from "react";
import { CgMenuGridR } from "react-icons/cg";

const Mobile_nav = ({ show, setShow }) => {
  return (
    <div>
      <CgMenuGridR
        style={{ width: "4rem", height: "2rem", marginRight: "2rem" }}
        title="Menu Bar"
        onClick={(e) => setShow(!show)}
        className="menuBar"
      />
    </div>
  );
};

export default Mobile_nav;
