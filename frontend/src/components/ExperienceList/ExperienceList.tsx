import React from "react";

import Job from "../../types/experiences/Job";
import AcademicBackground from "../../types/experiences/AcademicBackground";
import Card from "./Card/Card";

interface ExperienceListProps {
  title: string;
  data: Array<Job | AcademicBackground>;
}

const ExperienceList: React.FC<ExperienceListProps> = ({ title, data }) => {
  const isEducational = "institution" in data[0];

  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-blue-500">{"<"}</span> {title}{" "}
        <span className="text-blue-500">{"/>"}</span>
      </h2>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {isEducational
          ? data.map((item) => (
              <Card key={item.id} item={item as AcademicBackground} />
            ))
          : data.map((item) => <Card key={item.id} item={item as Job} />)}
      </div>
    </div>
  );
};

export default ExperienceList;
