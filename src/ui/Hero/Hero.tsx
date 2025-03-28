import { Header } from "@/components/Header";
import styles from "./Styles.module.scss";
import Image from "next/image";
import icon1 from '@/../public/images/Лого Bimkg.svg'
import icon2 from '@/../public/images/Promgrad.svg'
import icon3 from '@/../public/images/Archi Vibe LOGO.svg'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Header />
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.desc}>
              Профессиональные чертежи<br/> и проектирование зданий
            </h1>
            <br/>
            <p className={styles.info}>
              Проектируем и создаем точные чертежи <br/>для надежного строительства
            </p>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <Image src={icon1} alt="icon" width={23} height={26}/>
              <p className={styles.iconTitle}>Bimkg</p>
            </div>
            <div className={styles.icon}>
              <Image src={icon2} alt="icon" width={23} height={26}/>
              <p className={styles.iconTitle}>Promgrad</p>
            </div>
            <div className={styles.icon}>
              <Image src={icon3} alt="icon" width={23} height={26}/>
              <p className={styles.iconTitle}>Archi Vibe</p>
            </div>
            <a href="#formik" className={styles.buttons}>
              Связаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
