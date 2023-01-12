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
    <div data-aos="fade-down" className="mt-[5%] ">
      <p className="text-[2rem]">
        𝕰𝖝𝖕𝖑𝖔𝖗𝖊 𝖙𝖍𝖊 𝖈𝖔𝖚𝖓𝖙𝖗𝖞 𝖔𝖋 𝖞𝖔𝖚𝖗 𝕯𝖗𝖊𝖆𝖒 𝕿𝖔𝖉𝖆𝖞 𝖜𝖎𝖙𝖍...
        <em className="text-[2.5rem] font-bold  text-[#d1a9db]">𝔐 & 𝔨</em>{" "}
        ...𝕿𝖗𝖆𝖛𝖊𝖑 𝖆𝖓𝖊 𝕿𝖔𝖚𝖗
      </p>
      <div className="flex flex-col justify-center items-center mt-[2%]">
        <div className="slider  flex  flex-row  justify-center items-center bg-[transparent]">
          <div className="slide-container  ">
            {picture.map(({ image, name }, i) => (
              <div
                key={i}
                className="image flex flex-col shrink-0  object-cover  "
              >
                <img src={image} alt="" />
                <p className="text-[2.2rem] font-bold right-[40%] w-[100%] font-serif h-[7vh] flex flex-row items-center ">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
