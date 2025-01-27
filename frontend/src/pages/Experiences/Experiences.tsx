import React from "react";
import { ExperienceList } from "../../components";

import experiences from "../../data/jobs.json";
import academicBackground from "../../data/academic-background.json";

const Experiences: React.FC = () => {
  return (
    <div
      className="
        py-20 container mx-auto px-5
        md:py-40
      "
      id="experiences"
    >
      <ExperienceList title="Experiences" data={experiences} />
      <ExperienceList title="Academic Background" data={academicBackground} />
    </div>
  );
};

export default Experiences;
