import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="دنبال طعم جدید" />
      <h1 className="app__header-h1">راز غذای خوب</h1>
      <p className="p__opensans">
        بگذار زمین باشد اما در پیری زندگی کنیم. چاشنی بیماری راحت تر از شکلات
        است. و در نهایت، زمین زیادی وجود دارد
      </p>
      <button type="button" className="custom__button">
        جست و جو منو
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header-img" />
    </div>
  </div>
);

export default Header;
