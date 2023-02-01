import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Accessibility/Login";
import Home from "./Home/Home";
import Sign_in from "./Accessibility/Sign_in";
import { useState } from "react";
import Nav_details from "./Service/Nav_details";

function App() {
  const navigate = useNavigate();
  const [shownav, setShownav] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login navigate={navigate} />} />
        <Route path="/Sign_in" element={<Sign_in navigate={navigate} />} />
        <Route path="/Visa_assistance" element={<Nav_details />} />
      </Routes>
    </div>
  );
}

export default App;
