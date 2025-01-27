import React from "react";
import AcademicBackground from "../../../types/experiences/AcademicBackground";
import JobType from "../../../types/experiences/Job";
import Job from "./Job/Job";
import Academic from "./Academic/Academic";

import "./Card.css";

interface CardProps {
  item: AcademicBackground | JobType;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const isEducational = "institution" in item;

  return (
    <div className={`min-h-44 bg-experiences p-5 rounded-md background-icon-card ${isEducational ? "academic" : "react"}`}>
      {isEducational ? (
        <Academic item={item as AcademicBackground} />
      ) : (
        <Job item={item as JobType} />
      )}
    </div>
  );
};

export default Card;
