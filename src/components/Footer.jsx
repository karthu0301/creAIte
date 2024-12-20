import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="footer">
      <button
        className={`footer-button ${
          location.pathname === "/" ? "active" : ""
        }`}
        onClick={() => handleNavigation("/")}
      >
        Profile
      </button>
      <button
        className={`footer-button ${
          location.pathname === "/schedule" ? "active" : ""
        }`}
        onClick={() => handleNavigation("/schedule")}
      >
        Schedule
      </button>
      <button
        className={`footer-button ${
          location.pathname === "/ideation" ? "active" : ""
        }`}
        onClick={() => handleNavigation("/ideation")}
      >
        Ideate
      </button>
      <button
        className={`footer-button ${
          location.pathname === "/edit" ? "active" : ""
        }`}
        onClick={() => handleNavigation("/edit")}
      >
        Edit
      </button>
    </footer>
  );
};

export default Footer;
