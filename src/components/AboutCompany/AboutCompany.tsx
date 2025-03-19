import scss from "./AboutCompany.module.scss";

const AboutCompany = () => {
  return (
    <div id="about" className={scss.AboutCompany}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.about}>
            <h2 className={scss.title}>О компании</h2>
            <div className={scss.description}>
              <h1>
                Мы — команда <span>профессионалов</span> в области{" "}
                <span>архитектурного проектирования</span> и{" "}
                <span>инженерных расчетов.</span>
              </h1>
              <p>
                Разрабатываем точные и детализированные чертежи для жилых,
                коммерческих и промышленных объектов. Наша работа сочетает
                функциональность, эстетику и современные технологии, обеспечивая
                надежные и продуманные решения для каждого проекта.
              </p>
            </div>
          </div>
          <div className={scss.achivements}>
            <div>
              <h1>10 лет</h1>
              <p>Опыта работы</p>
            </div>
            <div>
              <h1>50+</h1>
              <p>Проектов</p>
            </div>
            <div>
              <h1>98%</h1>
              <p>Рекомендуют</p>
            </div>
            <div>
              <h1>20+</h1>
              <p>Сотрудников</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
