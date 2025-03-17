import styles from "./Styles.module.scss";

export const CallBack = () => {
  return (
    <div className={styles.CallBack}>
      <div id="formik" className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Cвязаться с нами</h2>
          <div className={styles.send_message}>
            <h1 className={styles.title_send_message}>
              Оставьте заявку – спроектируем{" "}
              <span>вашу идею в реальность!</span>
            </h1>
            <form className={styles.inputs}>
              <input
                placeholder="ФИО/Имя компании"
                className={styles.input}
                type="text"
                name="name"
              />
              <input
                className={styles.input}
                type="tel"
                // name="phone"
                placeholder="Номер телефона*"
              />
              <input
                placeholder="Эл. адрес"
                className={styles.input}
                type="email"
                // name="email"
              />
              <textarea
                placeholder="Сообщение"
                className={styles.textarea}
                name="message"
              ></textarea>
              <label className={styles.label_checkbox}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  // name="agree"
                />
                <span className={styles.customCheckbox}></span>
                Согласен с условиями политики конфиденциальности
              </label>
              <button className={styles.button}>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
