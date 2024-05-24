import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/into-img.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi I'M A FRONTEND DEVELOPER</p>
        <h1>MERN STACK DEVELOPER</h1>
        <div>
          <link to="/project" className="btn">
            Projects
          </link>
          <link to="/contact" className="btn">
            Projects
          </link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
