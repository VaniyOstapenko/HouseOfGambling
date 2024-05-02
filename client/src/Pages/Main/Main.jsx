import { useState } from "react";
import style from "./style.module.css";

function Main() {
  const [text, setText] = useState([
    {
      paragraph: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
      date: "10.02.2023",
    },
    {
      paragraph: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
      date: "10.02.2023",
    },
    {
      paragraph: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
      date: "10.02.2023",
    },
    {
      paragraph: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
      date: "10.02.2023",
    },
    {
      paragraph: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
      date: "10.02.2023",
    },
    {
      paragraph: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
      date: "10.02.2023",
    },
  ]);

  return (
    <div className={style.mainWrapper}>
      <div className={style.headerBlock}>
        <h1 className={style.textHeader}>
          HOUSE OF <span className={style.gambling}>GAMBLING</span>
        </h1>
        <p className={style.paragraphHeader}>
          Raise your ROI with direct advertiser
        </p>
        <div className={style.partnership}>Become a Partner</div>
      </div>

      <div className={style.pictureBlock}>
        <div className={style.linePicture1}></div>
        <div className={style.linePicture2}></div>
        <div className={style.linePicture3}></div>
      </div>

      <div className={style.scrollBlock}>
        <h1 className={style.blog}>BLOG</h1>
        <div className={style.scrollText}>
          {text.map((el) => (
            <div className={style.list}>
              <p className={style.pArr1}>{el.paragraph}</p>
              <p className={style.pArr2}>{el.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
