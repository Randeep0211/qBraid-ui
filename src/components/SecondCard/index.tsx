import React from "react";
import CardTwo from "../cardTwo/index";
import { Data } from "../../data";

export interface SecondCardData {
  title: string;
  link: string;
  description: string;
  icon: string;
}

const SecondCard: React.FC = () => {
  return (
    <div className="secondCardContainer">
      {Data.map((cardItem: SecondCardData) => {
        return (
          <CardTwo
            cardItem={cardItem}
            onClick={(link: string) => {
              window.open(link, "_blank");
            }}
          />
        );
      })}
    </div>
  );
};

export default SecondCard;
