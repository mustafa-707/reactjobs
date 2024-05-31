import Card from "./Card";
const HomeCards = () => {
  return (
    <>
      <section className="home-cards">
        <div className="home-card-container">
          <Card
            title="For Developers"
            subtitle="Browse our React jobs and start your career today"
            btnText="Browse Jobs"
            link="/jobs"
          ></Card>
          <Card
            title="For Employers"
            subtitle="List your job to find the perfect developer for the role"
            link="/add-job"
            btnText="Add Job"
            bg="bg-indigo-100"
          ></Card>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
