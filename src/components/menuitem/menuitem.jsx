import React from "react";
import "./menuitem.scss";

const MenuItem = ({ title, subtitle, imageUrl, size }) => (
  <div className={`${size} container`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="text-container">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default MenuItem;
