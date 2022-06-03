import React from "react";
import "./card.css";

interface CardOneProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  onClick: () => void;
}

const CardOne: React.FC<CardOneProps> = (props) => {
  return (
    <div className="Card" onClick={props.onClick}>
      <p className="cardTitle">{props.title}</p>
      <img src={props.icon} alt="image" className="iconImg" />
      <div className="logoImg">
        <img src={props.image} alt="image" className="qBraidImg" />
        <span>
          <p className="logoName">
            qBraid <span className="logoNameTwo">| SDK</span>
          </p>
        </span>
      </div>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default CardOne;
