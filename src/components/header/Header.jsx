import React from "react";

import { Link } from "react-router-dom";
import "../../pages/home/Home.css";

import Image from "../../images/main_header.png";

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The legends of the Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            numquam a neque reprehenderit quidem iure laborum vitae odio eum, ab
            dignissimos iste illum qui dolores et harum minus ex earum deserunt
            dolor? Fuga, quaerat consequatur!
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="pic " />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
