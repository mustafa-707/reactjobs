import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const [showFullDescription, setShowFulDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = job.description.substring(0, 90) + "...";
  }
  return (
    <>
      <div className="job-card">
        <div className="job-info">
          <div className="job-type">{job.type}</div>
          <h3 className="job-title">{job.title}</h3>
        </div>
        <div className="job-description"> {description}</div>
        <button
          onClick={() => setShowFulDescription((state) => !state)}
          className="job-expand-btn"
        >
          {showFullDescription ? "Less" : "More"}
        </button>
        <h3 className="job-salary">{job.salary} / Year</h3>
        <div className="job-seperator"></div>
        <div className="job-footer">
          <div className="job-location">
            <FaMapMarker className="job-location-icon" /> {job.location}
          </div>
          <Link to={`/job/${job.id}`} className="job-link">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Job;
