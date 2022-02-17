import React from "react";
import { useLocation, useNavigate, useMatch, useHistory } from "react-router-dom"
import "./menuitem.scss";

const MenuItem = ({ title, subtitle, imageUrl, size, linkUrl }) => { 
  let navigator = useNavigate();
  let match = useLocation();

  return <div className={`${size} container`} onClick={() => {
    navigator(`${match.pathname}${linkUrl}`)
  }}>
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
  
};

export default MenuItem;
