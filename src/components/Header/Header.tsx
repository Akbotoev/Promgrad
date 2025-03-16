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
            <a href="#">Контакты</a>
          </nav>
          <a href="#" className={styles.button}>
            Связаться
          </a>
        </div>
      </header>
    </div>
  );
};
