import { Header } from '@/components/Header';
import styles from './Styles.module.scss';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="container">
      <section className={styles.hero}>
        <Header />
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.desc}>Профессиональные чертежи и проектирование зданий</h1>
            <p className={styles.info}>Проектируем и создаем точные чертежи для надежного строительства</p>
          </div>
          <div className={styles.icons}>
            <img src="/images/Bilim.svg" alt="Bimkg" width={80} height={40} />
            <img src="/images/prom.svg" alt="Promgrad" width={80} height={40} />
            <img src="/images/Archi.svg" alt="Archi Vibe" width={80} height={40} />
          </div>
        </div>
      </section>
    </div>
  );
};
