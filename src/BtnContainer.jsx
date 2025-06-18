import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const { company, id } = job;
        return (
          <button
            key={id}
            onClick={() => setCurrentItem(index)}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
