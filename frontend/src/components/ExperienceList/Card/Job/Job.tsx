import React from "react";
import JobType from "../../../../types/experiences/Job";
import Tags from "./Tags/Tags";

interface JobProps {
  item: JobType;
}

const Job: React.FC<JobProps> = ({ item }) => {
  const initialDate =
    item.isEnded && item.endDate !== null
      ? new Date(item.endDate).getTime()
      : new Date().getTime();
  const finalDate = new Date(item.startDate).getTime();

  const totalMonths = Math.floor(
    (initialDate - finalDate) / (1000 * 60 * 60 * 24 * 30.44)
  );
  const years = Math.floor(totalMonths / 12);
  const months = (totalMonths % 12)+1;
  return (
    <>
      <h1 className="text-xl font-bold mb-1">{item.title}</h1>
      <p className="text-base mb-1">{item.company}</p>
      {item.isEnded && item.endDate !== null ? (
        <p className="text-sm text-white md:text-slate-500 mb-1">
          {new Date(item.startDate).toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}{" "}
          -{" "}
          {new Date(item.endDate).toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}
          {years > 0
            ? ` (${years} years and ${months} months)`
            : ` (${months} months)`}
        </p>
      ) : (
        <p className="text-sm text-white md:text-slate-500 mb-1">
          {new Date(item.startDate).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}{" "}
          - Present
          {years > 0
            ? ` (${years} years and ${months} months)`
            : ` (${months} months)`}
        </p>
      )}
      <p className="text-sm text-white md:text-slate-500 mb-1">
        {item.description.length > 63
          ? `${item.description.substring(0, 63)}...`
          : item.description}
      </p>

      <Tags tags={item.tags} />
    </>
  );
};

export default Job;
