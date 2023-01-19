import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav_bar from "./Navigation/Nav_bar";
import Footer from "./Footer/Footer";
import Brand from "./Brand/Brand";
import Flight_Deal from "./Service/Flight_Deal";
import Trending_deal from "./Service/Trending_deal";
import Rent_vehichle from "./Service/Rent_vehichle";
import Collaboration_Company from "./Service/Collaboration_Company";
import Mail from "./Service/Mail";
import Services from "./Service/Services";
import SlideShow from "./Service/SlideShow";

function App() {
  return (
    <div className="App">
      <Nav_bar />
      <Brand />
      <Services />
      <Flight_Deal />
      <Trending_deal />
      {/* cmout<SlideShow /> */}
      <Rent_vehichle />
      <Collaboration_Company />
      <Mail />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
