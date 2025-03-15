import AboutCompany from "./AboutCompany/AboutCompany";
import Card from "./Card/Card";
import scss from "./Home.module.scss";

const Home = () => {
  return (
    <div className={scss.Home}>
      <AboutCompany />
      <Card />
    </div>
  );
};

export default Home;
