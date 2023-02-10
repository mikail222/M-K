import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Accessibility/Login";
import Home from "./Home/Home";
import Sign_in from "./Accessibility/Sign_in";
import { useState } from "react";
import Affilate from "./Home/Affilate";
import Contact from "./Service/Contact";
import Visa_assistance from "./Service/Visa_assistance";
import darunnur from "./assets/darun-nur-low-resolution-logo-color-on-transparent-background.png";
import Affilate_Registration from "./Home/Affilate_Registration";

function App() {
  const navigate = useNavigate();
  const [shownav, setShownav] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home navigate={navigate} darunnur={darunnur} />}
        />
        <Route
          path="/Login"
          element={<Login navigate={navigate} darunnur={darunnur} />}
        />
        <Route
          path="/Sign_in"
          element={<Sign_in navigate={navigate} darunnur={darunnur} />}
        />
        <Route path="/Visa_assistance" element={<Visa_assistance />} />
        <Route path="/Affilate" element={<Affilate navigate={navigate} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Affilate_Registration"
          element={<Affilate_Registration />}
        />
      </Routes>
    </div>
  );
}

export default App;
