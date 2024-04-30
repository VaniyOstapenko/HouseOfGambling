import style from "./style.module.css";

function Header() {
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
        <div className={style.language}>
          <div className={style.languagePicture}></div> EN
        </div>
        <div className={style.logIn}>LOG IN</div>
        <div className={style.signIn}>SIGN UP</div>
      </div>
    </div>
  );
}

export default Header;
