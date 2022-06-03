import React from "react";
import { SecondCardData } from "../SecondCard";
import "./card.css";

interface cardTwoProps {
  cardItem: SecondCardData;
  onClick: (link: string) => void;
}

const CardTwo: React.FC<cardTwoProps> = ({
  cardItem,
  onClick,
}: cardTwoProps) => {
  return (
    <div>
      <div className="Card" onClick={() => onClick(cardItem.link)}>
        <p className="cardTitle">{cardItem.title}</p>
        <img src={cardItem.icon} alt="image" className="iconImg" />
        <div>
          <p className="name">
            Qiskit <span className="nameTwo">/qiskit-terra</span>
          </p>
        </div>
        <p className="description">{cardItem.description}</p>
      </div>
    </div>
  );
};

export default CardTwo;
