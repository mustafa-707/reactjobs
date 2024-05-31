import React from "react";
import { Link } from "react-router-dom";
const Card = ({ title, subtitle, link, btnText, bg = "bg-slate-100" }) => {
  return (
    <div className={`${bg} card`}>
      <h2 className="home-card-title">{title}</h2>
      <p className="home-card-content">{subtitle}</p>
      <Link to={link} className="home-card-link">
        {btnText}
      </Link>
    </div>
  );
};

export default Card;
