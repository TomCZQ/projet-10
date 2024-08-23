import React from "react";
import "./Style/FeatureCard.scss"

const FeatureCard = (props) => {
  return (
    <div className="feature-item">
      <img src={props.icon} alt={props.title} className="feature-icon"></img>
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};
export default FeatureCard;
