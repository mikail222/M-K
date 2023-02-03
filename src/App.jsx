import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Accessibility/Login";
import Home from "./Home/Home";
import Sign_in from "./Accessibility/Sign_in";
import { useState } from "react";
import Affilate from "./Home/Affilate";
import Contact from "./Service/Contact";
import Visa_assistance from "./Service/Visa_assistance";

function App() {
  const navigate = useNavigate();
  const [shownav, setShownav] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/Login" element={<Login navigate={navigate} />} />
        <Route path="/Sign_in" element={<Sign_in navigate={navigate} />} />
        <Route path="/Visa_assistance" element={<Visa_assistance />} />
        <Route path="/Affilate" element={<Affilate />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
