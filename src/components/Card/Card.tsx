import scss from "./Styles.module.scss";

const Card = () => {
  return (
    <div className={scss.Card}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </div>
  );
};

export default Card;
