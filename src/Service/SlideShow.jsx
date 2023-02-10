import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SlideShow = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div className="slider">
        <div className="slide-container text-white flex flex-col  text-right">
          <p className="text-[0.90rem]">
            For cheaper Virgin tickets, please call 08124330616
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
