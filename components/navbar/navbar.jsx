import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "/assets/Logo.svg";
import arrow from "/assets/icons/arrow.svg";
import search from "/assets/icons/search.svg";
import watchlist from "/assets/icons/watchList.svg";
import user from "/assets/icons/user.svg";
import mode from "/assets/icons/mode.svg";
import close from "/assets/icons/close.svg";

import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navlinks = [
    "Movies",
    "TV shows",
    "Celebs",
    "Watch",
    "Awards",
    "Community",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.closest(".menu-modal") === null && isMenuOpen) {
        closeMenu();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="container">
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <a href="#">
          <img src={Logo} alt="logo" className="logo"/>
        </a>
        <nav className={isMenuOpen ? "nav-open" : ""}>
          <ul>
            {navlinks.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="searchArea">
          <div className="searchAreaDropDown_All">
            <p>All</p>
            <img src={arrow} alt="arrow" />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search IMDb"
          />
          <img src={search} alt="search" />
        </div>
        <div className="watchList">
          <img src={watchlist} alt="watchlist" />
          <p>Watchlist</p>
        </div>
        <div className="user">
          <img src={user} alt="user" />
          <p>User</p>
        </div>
        <div className="lang">
          <p>EN</p>
          <img src={arrow} alt="arrow" />
        </div>
        <img src={mode} alt="mode" className="themeMode" />
      </div>
      {isMenuOpen && (
        <div className="menu-modal">
            <img src={close} alt="close" className="closeModal" onClick={() => closeMenu()}/>
          <ul>
            {navlinks.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
