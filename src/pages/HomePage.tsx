import React from "react";
import Header from "../components/header/index";
import FirstCard from "../components/FirstCard/index";
import SecondCard from "../components/SecondCard/index";
import "./index.css";
import Qiskitlogo from "../assets/Qiskitlogo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />

      <FirstCard />
      <img src={Qiskitlogo} alt="image" className="Qiskitlogo" />
      <div className="secondCardContainer">
        <SecondCard />
      </div>
    </div>
  );
};

export default HomePage;
