import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import images from "../../images/logo.png";
import { TiEquals } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";

import "./Navbar.css";

const Navbar = ({ isLightMode }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav>
      <div className="container nav_container">
        <Link
          to="/"
          className="logo"
          onClick={() => {
            setIsShow(false);
          }}
        >
          <img src={images} alt="Logo" />
        </Link>
        <ul className={`nav__links ${isShow ? "show_nav" : "hide_nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => {
                    setIsShow((prev) => !prev);
                  }}
                  className={({ isActive }) => (isActive ? "active_nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => {
            setIsShow((prev) => !prev);
          }}
        >
          {isShow ? <MdOutlineClose /> : <TiEquals />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
