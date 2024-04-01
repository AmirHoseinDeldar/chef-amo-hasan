import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.sosis} alt="" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">خانه</a>
        </li>
        <li className="p__opensans">
          <a href="#about">درباره ما</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">منو</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">جوایز</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">تماس با ما</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          ثبت نام / ورود
        </a>
        <div />
        <a href="/" className="p__opensans">
          رزرو میز
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">خانه</a>
              </li>
              <li className="p__opensans">
                <a href="#about">درباره ما</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">منو</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">جوایز</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">تماس با ما</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
