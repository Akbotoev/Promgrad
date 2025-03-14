import styles from './Styles.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className='container'>
            <h1>Профессиональные чертежи и проектирование зданий</h1>
        </div>
    </section>
  );
}