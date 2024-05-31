const Hero = ({
  title = "Become a React Dev",
  description = "Find the React Job that fits your skill set",
}) => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-align">
          <div className="hero-text">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-description">{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
