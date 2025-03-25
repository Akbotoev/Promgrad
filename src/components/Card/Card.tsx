"use client";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import scss from "./Card.module.scss";
import axios from "axios";

interface ICard {
  id: number;
  category_name: string;
  image: string;
  title: string;
  address: string;
  year: number;
}

interface Brand {
  id: number;
  category: string;
  image: string;
}

const Card = () => {
  const [data, setData] = useState<ICard[]>([]);
  const [brends, setBrends] = useState<Brand[]>([]);
  const [brend, setBrend] = useState<string>("Все");
  const [quantity, setQuantity] = useState<number>(8);

  async function getData() {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/product/product/`
    );
    if (brend === "Все") {
      setData(data);
    } else {
      setData(data.filter((el: ICard) => el.category_name.includes(brend)));
    }
  }
  async function getBrends() {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/product/categories/`
    );
    setBrends(data);
  }

  useEffect(() => {
    getData();
    getBrends();
    const updateQuantity = () => {
      const width = window.innerWidth;
      if (width > 1280) {
        setQuantity(8);
      } else if (width > 700) {
        setQuantity(6);
      } else if (width > 500) {
        setQuantity(4);
      } else {
        setQuantity(3);
      }
    };

    updateQuantity();
    window.addEventListener("resize", updateQuantity);

    return () => {
      window.removeEventListener("resize", updateQuantity);
    };
  }, [brend]);

  return (
    <div id="portfolio" className={scss.Card}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.header}>
            <h2 className={scss.title}>Портфолио</h2>
            <div className={scss.brends}>
              {brends.map((el) => (
                <div
                  key={el.id}
                  onClick={() => setBrend(el.category)}
                  className={brend === el.category ? scss.active : ""}
                >
                  {el.image && (
                    <Image
                      src={el.image}
                      alt={el.category}
                      width={300}
                      height={300}
                    />
                  )}
                  <span>{el.category}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={scss.blocks}>
            <PhotoProvider>
              {data.slice(0, quantity).map((el) => (
                <div className={scss.block} key={el.id}>
                  <PhotoView src={el.image}>
                    <Image
                      width={300}
                      height={300}
                      src={el.image.trim()}
                      alt="image"
                    />
                  </PhotoView>
                  <p>{el.title}</p>
                  <div>
                    <h4>{el.address}</h4>
                    <h4>{el.year}</h4>
                  </div>
                </div>
              ))}
            </PhotoProvider>
          </div>
          {data.length > quantity && (
            <button
              onClick={() =>
                setQuantity(quantity == 6 ? quantity + 3 : quantity + 4)
              }
            >
              Показать ещё
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
