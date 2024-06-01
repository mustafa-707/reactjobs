import Hero from "../components/Hero.jsx";
import HomeCards from "../components/HomeCards.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";
function HomePage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isFromHome={true} />
      <ViewAllJobs />
    </>
  );
}

export default HomePage;
