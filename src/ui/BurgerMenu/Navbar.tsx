"use client";
import { useState, useEffect } from "react";
import styles from "./Styles.module.scss";
import { Menu, X } from "lucide-react";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isOpen]);

useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
},[isOpen]);

const handleClose = () => setIsOpen(false);

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerIcon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X color="black" size={30} /> : <Menu color="white" size={30} />}
      </button>
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={handleClose}></div>
          <nav className={styles.menu}>
            <div className={styles.menuHeader}>
              <div className={styles.logo}>ЛОГО</div>
              <div className={styles.divider}></div>
            </div>
            <ul>
              <li><a href="#about"  onClick={handleClose}>О компании</a></li>
              <li><a href="#portfolio"  onClick={handleClose}>Портфолио</a></li>
              <li><a href="#footer"  onClick={handleClose}>Контакты</a></li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};
