import Job from "./Job.jsx";
import { useState, useEffect } from "react";
import Spinner from "./Spinner.jsx";
const JobListings = ({ isFromHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isFromHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs :: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const jobListings = isFromHome ? jobs.slice(0, 3) : jobs;

  return (
    <>
      <section className="job-listings">
        <div className="job-listings-container">
          <h2 className="job-listings-title">
            {isFromHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {isLoading ? (
            <Spinner isLoading={isLoading} />
          ) : (
            <div className="job-listings-list">
              {jobListings.map((job) => (
                <Job key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
