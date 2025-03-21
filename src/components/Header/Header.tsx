import { BurgerMenu } from "@/ui/BurgerMenu";
import styles from "./Styles.module.scss";

export const Header = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.containerr}>
          <div className={styles.logo}>ЛОГО</div>
          <nav className={styles.nav}>
            <a href="#about">О компании</a>
            <a href="#portfolio">Портфолио</a>
            <a href="#footer">Контакты</a>
            <a href="#formik" className={styles.button}>
            Связаться
          </a>
          </nav>
         
        </div>
        <div className={styles["burger-menu"]}>
        <BurgerMenu/>
        </div>
      </header>
    </div>
  );
};
