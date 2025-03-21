import { Header } from "@/components/Header";
import styles from "./Styles.module.scss";

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
            <img src="/images/bilm.svg" alt="Bimkg" width={100} height={40} />
            <img src="/images/arch.svg" alt="Promgrad" width={110} height={40} />
            <img src="/images/arche.svg"alt="Archi Vibe"width={100}height={40} />
            <a href="#formik" className={styles.buttons}>
              Связаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
