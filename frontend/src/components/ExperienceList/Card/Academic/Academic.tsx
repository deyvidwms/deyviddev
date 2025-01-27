import React from "react";
import AcademicBackground from "../../../../types/experiences/AcademicBackground";

interface AcademicProps {
  item: AcademicBackground;
}

const Academic: React.FC<AcademicProps> = ({ item }) => {
  return (
    <div key={item.id} className="mb-4">
      <h1 className="text-xl font-bold mb-1">{item.institution}</h1>
      <p className="text-base mb-1">{item.degree}</p>
      {item.isEnded && item.endDate !== null ? (
        <p className="text-sm text-white md:text-slate-500 mb-1">
          {new Date(item.startDate).toLocaleString(
            "en-US",
            {
              month: "long",
              year: "numeric",
            }
          )}{" "}
          -{" "}
          {new Date(item.endDate).toLocaleString(
            "en-US",
            {
              month: "long",
              year: "numeric",
            }
          )}
        </p>
      ) : (
        <p className="text-sm text-white md:text-slate-500 mb-1">
          {new Date(item.startDate).toLocaleDateString(
            "en-US",
            { month: "long", year: "numeric" }
          )}{" "}
          - Present
        </p>
      )}
    </div>
  );
};

export default Academic;
