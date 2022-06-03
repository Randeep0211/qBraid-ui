import React from "react";
import qBraidImg from "../../assets/qBraidImg.png";
import "./cardOne.css";
import CardOne from "../cardOne/index";
import tool from "../../assets/toolImage.png";

const FirstCard = () => {
  return (
    <div className="cardOneContainer">
      <div className="logo">
        <img src={qBraidImg} alt="image" className="qBraidImg" />
        <p className="logoName">
          <b>qBraid</b>
        </p>
      </div>

      <div className="cardContainer">
        <CardOne
          title="Development"
          icon={tool}
          image={qBraidImg}
          description="This is the ground from where we start developing.
          It can include text and color styles as well as standard interactions and spacing"
          onClick={() => {
            window.open(
              "https://qbraid-qbraid.readthedocs-hosted.com/en/latest/sdk/overview.html",
              "_blank"
            );
          }}
        />
      </div>
    </div>
  );
};

export default FirstCard;
