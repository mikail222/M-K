import React, { useEffect } from "react";
import img1 from "../assets/haidan-IOBIgKmjm1Y-unsplash.jpg";
import img2 from "../assets/nupo-deyon-daniel-67ruAEYmp4c-unsplash.jpg";
import img3 from "../assets/svetlana-gumerova-0wM3sBMDXq4-unsplash.jpg";
import img4 from "../assets/lycheeart-BZG5p-u35tI-unsplash.jpg";
import img5 from "../assets/masarath-alkhaili-vmCHHfp25lU-unsplash.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const SlideShow = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const picture = [
    { image: img1, name: "Saudi - Arabia" },
    { image: img2, name: "Lagos" },
    { image: img3, name: "Turkey" },
    { image: img4, name: "China" },
    { image: img5, name: "Qatar" },
  ];
  console.log(picture[1]);

  return (
    <div>
      <div className="slider">
        <div className="slide-container text-white ">
          <p>For cheaper Virgin tickets, please call 08124330616</p>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
