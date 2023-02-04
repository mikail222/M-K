import React from "react";
import logo from "../assets/darul-nur-low-resolution-logo-color-on-transparent-background.png";
import Nav_bar from "../Navigation/Nav_bar";
import arabman from "../assets/istockphoto-1298353587-612x612-removebg-preview.png";
import group from "../assets/111-1110507_img-group-of-people-animated-png-clipart-removebg-preview.png";
import announce from "../assets/images-removebg-preview.png";
import offer from "../assets/pngtree-percent-sign-3d-icon-render-png-image_6116477-removebg-preview.png";
import satisfaction from "../assets/51-510761_100-satisfaction-guarantee-label-removebg.png";
import Mail from "../Service/Mail";
import Footer from "../Footer/Footer";
const Affilate = () => {
  const affilateman =
    "https://media.istockphoto.com/id/1298353587/photo/smiling-handsome-25s-middle-eastern-man-showing-okay-sign-holding-smartphone-isolated-over.jpg?s=612x612&w=0&k=20&c=FcFGgUIHFkFJCSDeF9ptk5DIFqVRTMkoye78TPD22ww=";
  return (
    <div>
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
            <img src={arabman} alt="" className="h-[75vh]" />
          </div>
        </section>
      </div>
      <div className="bg-[#f8f9fc] my-[1rem] h-[130vh] py-[2rem]">
        <div className="my-[5rem]">
          <div className="w-[40%] mx-[5rem]">
            <p className="text-[2rem] font-bold leading-[2.5rem] font-serif w-[70%] ">
              Why Become Darun-nur Affiliate?
            </p>
            <p className="w-[80%] my-[2rem]">
              Enjoy unbeatable discounts on flights, hotels, tours and visa
              processing, all around the world - far better than what you get
              with any other online travel company
            </p>
          </div>
          <div className="affilate_detail  flex flex-row justify-evenly  items-center my-[5rem]">
            <div className="container">
              <div className="w-[100%] h-[70%] rounded-[15px] bg-[#ffecd7]">
                <img
                  src={group}
                  alt=""
                  className="w-[80%] h-[70%]  bg-[#ffecd7]"
                />
              </div>
              <p className="text-[1.2rem] font-bold my-[1rem]">Who we are</p>
              <p>
                We are Nigeria's leading online travel agency offering you the
                best prices for travel products and technology to enable you
                grow your travel business.
              </p>
            </div>
            <div className="container">
              <div className="w-[100%] h-[80%] bg-[lightgray] rounded-[15px]">
                <img src={announce} alt="" className="w-[70%] h-[80%]" />
              </div>
              <p className="text-[1.2rem] font-bold my-[1rem]">
                Become an Affilate
              </p>
              <p>
                We put the power of pricing in your hands by giving you the
                ability to adjust pricing for flights and hotels at great
                discounts.
              </p>
            </div>
            <div className="container">
              <div className="w-[100%] h-[80%] bg-[#96ecd3] rounded-[15px]">
                <img
                  src={offer}
                  alt=""
                  className="w-[60%] h-[80%] bg-[#96ecd3]"
                />
              </div>
              <p className="text-[1.2rem] font-bold my-[1rem]">What we offer</p>
              <p>
                We offer discounted domestic and international flights, over
                508,000 hotels worldwide, airport transfers, visa services and
                travel packages.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center h-[60vh]">
        <div className="flex flex-row justify-center items-center  w-[40%] h-[25vh]">
          <img src={satisfaction} alt="" className="w-[20vw]" />
          <div>
            <p className="text-[1.2rem] font-bold my-[0.5rem]">
              Satisfaction Guarantee
            </p>
            <p className="w-[80%] text-[0.9rem]">
              Receive a refund on your travel insurance premium within 10 days
              of purchase.
            </p>
          </div>
        </div>
        <div className=" bg-[#96ecd3] w-[40%] h-[27vh]">
          <div className="m-[1.2rem]">
            <p className="font-extrabold">Need Darun nur help?</p>
            <p className="my-[0.5rem] w-[24rem] font-thin">
              We would be more than happy to help you. Our team advisor are 24/7
              at your service to help you.
            </p>
            <p>Email: Darunnur@gmail.com</p>
            <p className="font-extrabold">Phone: 08124330616</p>
          </div>
        </div>
      </div>
      <Mail />
      <Footer />
    </div>
  );
};

export default Affilate;
