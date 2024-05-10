import { useState } from "react";
import style from "./style.module.css";

function Header() {
  const [language, setLanguage] = useState("EN");
  const [flag, setFlag] = useState(true);

  function clickLanguage() {
    language === "EN" ? setLanguage("RU") : setLanguage("EN");
  }
  function clickBurger() {
    setFlag(!flag);
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
          <div className={style.languagePicture}></div> <div>{language}</div>
        </div>
        <div className={style.logIn}>LOG IN</div>
        <div className={style.signIn}>SIGN UP</div>
      </div>
      <div className={style.burgerMenu} onClick={clickBurger}>
        {flag ? (
          <div className={style.burger}></div>
        ) : (
          <div className={style.cross}>
            <div className={style.adaptiveParagraph}>
              <p>Brands</p>
              <p>Commissions</p>
              <p>News</p>
              <p>Contact us</p>
              <p>Careers</p>
              <div className={style.logInAdaptive}>LOG IN</div>
              <div className={style.signInAdaptive}>SIGN UP</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
