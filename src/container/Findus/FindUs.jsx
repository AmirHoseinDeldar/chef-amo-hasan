import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="تماس با ما" />
      <h1
        className="headtext__cormorant"
        style={{
          marginBottom: "3rem",
        }}
      >
        مارا پیدا کنید
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">جنت آباد خ بهار نرسیده به کوچه حسن</p>
        <p
          className="p__comorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          ساعت کاری
        </p>
        <p className="p__opensans">شنبه - چهارشنبه : ساعت 12 ظهر - 12شب</p>
        <p className="p__opensans">پنج شنبه - جمعه : ساعت 12 ظهر - 2 شب</p>
      </div>

      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        حضور در رستوران
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus__img" />
    </div>
  </div>
);

export default FindUs;
