import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt="image_chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="کلام سرآشپز" />
      <h1 className="headtext__cormorant">باور های ما </h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit?
          </p>
        </div>

        <p className="p__opensans">
          نویسنده باید در کمان شلیک شود. هیچ تکلیف و دستور پخت شکلاتی وجود
          ندارد، برخی از کارمندان از فوتبال فارغ التحصیل شده اند. همیشه به
          تکالیف به درستی رسیدگی می شود.
        </p>
      </div>

      <div className="app_chef-sign">
        <p style={{ color: "white" }}>Amo Hasan</p>
        <p className="p__opensans">آشپز و مالک</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
