import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img src="../images/katie-zaferes.png" className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span className="gray">5.0</span>
        <span className="gray">(6) • </span>
        <span>USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
};

export default Card;
