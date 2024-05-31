import jobs from "../data/jobs.json";
import Job from "./Job.jsx";
import { Link } from "react-router-dom";
const JobListings = () => {
  const recentJob = jobs.slice(0, 3);
  return (
    <>
      <section className="job-listings">
        <div className="job-listings-container">
          <h2 className="job-listings-title"></h2>
          <div className="job-listings-list">
            {recentJob.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
      <ViewAllJobs />
    </>
  );
};

export default JobListings;

const ViewAllJobs = () => {
  return (
    <section className="view-all-jobs">
      <Link to="/jobs" className="view-all-jobs-btn">
        View All Jobs
      </Link>
    </section>
  );
};
