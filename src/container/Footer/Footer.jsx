import React from "react";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding app__bg" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">تماس با ما</h1>
        <p className="p__opensans"> جنت آباد مرکزی خ حسن</p>
        <p className="p__opensans" dir="ltr">
          {" "}
          +909 230 12 02
        </p>
        <p className="p__opensans" dir="ltr">
          {" "}
          +909 230 12 03
        </p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.sosis} alt="sosis__img" />
        <p className="p__opensans">
          &quot;بهترین راه برای یافتن خود این است که خود را در خدمت دیگران گم
          کنی.&quot;
        </p>
        <img src={images.spoon} alt="spoon_img" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">ساعت کاری</h1>
        <p className="p__opensans">شنبه - چهارشنبه :</p>
        <p className="p__opensans"> ساعت 12 ظهر - 12شب</p>
        <p className="p__opensans">پنج شنبه - جمعه :</p>
        <p className="p__opensans"> ساعت 12 ظهر - 2 شب</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans" dir="ltr">
        {" "}
        2024 Amo-Hasan. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
