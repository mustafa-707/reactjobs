import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import HomeCards from "../components/HomeCards.jsx";
import JobListings from "../components/JobListings.jsx";
function HomePage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings />
    </>
  );
}

export default HomePage;
