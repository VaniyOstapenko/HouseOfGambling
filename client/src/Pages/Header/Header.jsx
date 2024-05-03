import { useState } from "react";
import style from "./style.module.css";

function Header() {
  const [language, setLanguage] = useState("EN");

  function clickLanguage() {
    language === "EN" ? setLanguage("RU") : setLanguage("EN");
  }
  return (
    <div className={style.headerWrapper}>
      <div className={style.paragraphsHeader}>
        <p>About us</p>
        <p>Brands</p>
        <p>Commissions</p>
        <p>News</p>
        <p>Contact us</p>
        <p>Careers</p>
      </div>
      <div className={style.buttonHeader}>
        <div className={style.language} onClick={clickLanguage}>
          <div className={style.languagePicture}></div> {language}
        </div>
        <div className={style.logIn}>LOG IN</div>
        <div className={style.signIn}>SIGN UP</div>
      </div>
    </div>
  );
}

export default Header;
