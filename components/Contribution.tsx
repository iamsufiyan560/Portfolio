import React from "react";
import GitHubCalendar from "./github-calender";

const Contribution = () => {
  return (
    <div
      className=" overflow-x-auto  pt-4 rounded-lg max-w-[94vw] md:w-full md:max-w-2xl 
    contribution-scrollbar "
    >
      <div className="w-full">
        <GitHubCalendar />
      </div>
    </div>
  );
};

export default Contribution;
