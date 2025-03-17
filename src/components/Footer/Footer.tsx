import React from "react";
import styles from "./Styles.module.scss";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footer_left}>
        <h1>ЛОГО</h1>
        <div className={styles.display_footer}>
          <div className={styles.links}>
            <nav>
              <a href="#">О компании</a>
              <a href="#">Портфолио</a>
              <a href="#">Контакты</a>
            </nav>
            <div className={styles.socials_links}>
              <a href="#">Whatsapp</a>
              <a href="#">Telegram</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <div className={styles.contact_footer}>
            <div className={styles.contacts}>
              <h3>Bimkg</h3>
              <h4>+996 503 608 468</h4>
              <h4>Улица Токтогула, дом 109</h4>
              <h4>bimkg@gmail.com</h4>
            </div>
            <div className={styles.contacts}>
              <h3>Promgrad</h3>
              <h4>+996 703 608 468</h4>
              <h4>Проспект Жибек Жолу, дом 555</h4>
              <h4>promgrad@gmail.com</h4>
            </div>
            <div className={styles.contacts}>
              <h3>Archi Vibe</h3>
              <h4>+996 703 608 468</h4>
              <h4>Проспект Эркиндик, дом 57</h4>
              <h4>archivibe@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4729.4067975671005!2d74.60048516486872!3d42.87518992249723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dcbdacf87b%3A0xfc7d686ab988f348!2z0J_Qu9C-0YnQsNC00Ywg0JDQu9CwLdCi0L7Qvi4!5e0!3m2!1sru!2skg!4v1742142562262!5m2!1sru!2skg"
          style={{
            border: "0",
            width: "100%",
            height: "100%",
          }}
          allowFullScreen // ✅ с большой буквы и без значения
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
