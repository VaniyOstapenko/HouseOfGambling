import style from "./style.module.css";

function Footer() {
  return (
    <div className={style.mainFooter}>
      <div className={style.blockPage}>
        <div className={style.blockParagraphs}>
          <p className={style.terms}>Terms & Conditions</p>
          <p>Cookies</p>
          <p>Contacts</p>
          <p>Careers</p>
          <p>Brand Guide</p>
        </div>
        <div className={style.blockPictures}>
          <p>Our social media:</p>
          <div className={style.pictures}>
            <div className={style.twitter}></div>
            <div className={style.facebook}></div>
            <div className={style.instagram}></div>
            <div className={style.link}></div>
            <div className={style.youtube}></div>
            <div className={style.spotify}></div>
            <div className={style.telegram}></div>
            <div className={style.vk}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
