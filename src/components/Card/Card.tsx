"use client";
import logoBim from "@/../public/Лого Bimkg.svg";
import logoPromgrad from "@/../public/Лого Promgrad.svg";
import logoArchiVibe from "@/../public/Archi Vibe LOGO.svg";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import scss from "./Card.module.scss";
import { useState } from "react";

interface ICard {
  image: string;
  title: string;
  address: string;
  year: number;
}

const data: ICard[] = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/00ec/3dcf/0fff5c1c1a141ab60ffadba054f96f18?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ef0cUCTL3Z~6t7~5LmP40s2pRt2GPEzXTjU6RKzOjDmZSyPMXAUkiWt4H4bKgHKenT7HtLlisr~uJQFBdqN9eiHs582BU7SuF5fFwQY5e25wy~GLyK5cnt1I3bpFrbNHxsJ3XLpCxDAlr-7fJ50wu368jqsszljsierf6JEpPkNSfSefVPtb1zzMdhU3wKMH7J0IEHV2wWFT58FmKmpD4IhtJ~q5Rx-3uQGx9XY7B4FNe~Xqw-p2NmyXOWEPjFy9SxlpjH5SU9S4GrR3E9~Tw6gOsaLfr3Fjj7Qy2yWX26zW6AW1M6J-jnEWV~2pXTCPPVHCmpFE0zYUkCLyvfXe5g__  ",
    title: 'ЖК "Ала-Тоо Резиденс" ',
    address: "г. Бишкек",
    year: 2024,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/5c16/ddaf/05a7daa4c6b0bdaef6f4f2aca5577a3c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i6vpDj0HyXRfeSlQGeEJOW2OkkO0ghIinvlWrrtHdOvYexyEGgxVtYG-HAkTFYR5qyGA4036BfdrejLvwPmvL798pCnnNshFdadySs1iJ9oDPwU3Qn6nrURyyv9auTW7kUTcHykZ2dCSpP6FtSUinPEBNzh5WD3cAu7j8txCSf3L0Hnogq5j4trmuT44f2~7k~5WPm3uIVDGsFdqyOcWZKFI~6y6lPCnsg81KjldCSHybftYvxWs6Q7f5lA5vKQGloHuM1L7l58ZpOmWnNpugLzInrPpiiU2xRB8~RRMqU78i1QFRL7TLvMuYrfDu5XKcfcMk-vUidm~ntlHKnVIbg__",
    title: 'ЖК "Ала-Тоо Резиденс" ',
    address: "г. Бишкек",
    year: 2024,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/264b/ed40/088ed702eaa30e7e597f7bd2dd0cac1c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hrSBJl-oGDLrFoqcWvYokzGagEgDBPi5KIEdcXw-5pLFLLmQ1c9thrEpall-sVbvpKuceKRoRNgwCHLYxnABHULFuRO1SSFnCiWePZl-bm~ld~neLcqjMywfPy~irrAhSmeDv-xqDNBX1wgOP6PJ47~erFxjeWH2TYpxba7ff-isb~bKm3XW~yyDaJ03LN4kPvCb3iVDn7SOEVxeeJqZq25ljWQrMq0BH0Xc9Oh0-HrNtRziiPMO9lzJnfz7V2f169lFvTG81o5Gpx07Ig63IIqEwR6Bv4F5~2xB-6JYjersc2hZAEg9nV56VY79fwlthyZDbFEDnfceABYrMJt-2w__",
    title: 'ЖК "Ала-Тоо Резиденс" ',
    address: "г. Бишкек",
    year: 2024,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/5389/861e/f593698a0aba8cb03d074dd2ff0a7d85?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZchcYm99~7BW6OAjtu0PJRE8GQ4KvexFiSyh2kq6pJCNcgwkDToctC6F0FdDEUdKW5sG0P~3S5~ct0ZaJZ1M9x1Ya2-A-C2SPyZJV8~eTGJKCgsIoCnX00rNjIdttn9Bks4tfD-9THX64qnV9w6~yflSirn-uiU9qVnOZ5aBY5ljUux8DhrbqiYJ~L-C2qjiCDrEJhOoyeCKImuV2V7x6kBdd-cc~O5~RfQ2wVMAcYbYq0~yZ9YD87nlE9SPxu-rKyksmSZ8aKXPvvUcSHxWdqs4H7c-jieHdIJ-GzYxbHO9UnzuDcDV~e-GFJgG6ysmFmath0gYqGNJwJnpwtNpJA__",
    title: 'ЖК "Ала-Тоо Резиденс" ',
    address: "г. Бишкек",
    year: 2024,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/a77d/21b0/8f1edcd3aff4c6eaf21407cca1bb3578?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n-Vy5-0aiHhFXpFFQ5pkYfQkYmho~Y1Q7C4sAlH90379oHiWHVHFqxijx0BpzwkZDtA0qgv8X7rmgils00Ssp-fIIixDXsDtXgVlJeqPouuJ1Tujy~u1bupi9xdRrWGsdlq2YYXGSoQjb5LJNEd7a8AxwpVutaBamPZIm~SZy8Rw0H~vsroRf1EtLbhA6O~PcO24KTbLimuhwJg5TmVbMOBQIMkmM58qpOOC~kKM2vjf7TuBVIl-KMEwwor3MFE160DTyiRR49GXpEoFqyQm9RJXA0t8VMyHMTwN9wLqAHB-QjsbzC6Jrg0aff7EHNEyl~H85m~xwmyk7foDzjpUuA__",
    title: 'ЖК "Ала-Тоо Резиденс" ',
    address: "г. Бишкек",
    year: 2024,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/84be/b429/beac22e9b44ca9e84ea54d976e12db64?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l3KvMKUCduk7UHPyspoqtLnfpD39oxbhbU9F80daQ-xhMohK1CBKtTUUoAOb7GxMrovqPoVFc9vL25yhgjzvF7XJbzYxUUzIcdIxodxpM10OlJEns-1GWckEZz816Mx9AbMbfbL2J3C1AhkgMO7kOJ19Gf6VImBxiNCqwnOifrkyW0NO-nexi1KsU3On1292iUJnlhteP4PoBoWjTWdG9Txhpc7IimTtYqcbkt1PcJxoHbBsvWKAR40EYC6onmHwC0o4MHdMM319qn68sQ0iB-KhYgoZ9NitLdSVH594sTHftZbllXgq5iJ~JeURiipYW4XNtoRF6~G-ahvda-lu3g__",
    title: 'ЖК "Ала-Тоо Резиденс" ',
    address: "г. Бишкек",
    year: 2024,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/4bc9/8453/c905744381a92b115a8ca94c93afa22c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lKbJ7yAcfY-dhw9XxrajXlwAno2~TEstHdtIsozDKLaksNc~L6u7iZbpKRs6L2UqkiAAlPS00ywT-uFWo1Qd2Z1AtP-P~kRv~TWQEqKRd9vdxrIvePgsawpUdXiD5rcZSu2YJxb3nZoHUQeVJg77FUtR87NjMyuBLy~KZg7V4NGRZ-G4StWbuqSlZnmz1xojbJywFDL6z-J1gwDzRCAAus4mH4k~e9Xy9lLNyZDFJAChdhfRATE~ZrnTpuaCO5tP4VxBD~k1tKfH4WLrMmkl2cOTJaL9YEFiwABkX-nWJMS521pRRli-OxYIqLSfkI~Gtnuqekj72IQ8OGb7zXiCgA__",
    title: 'ЖК "Ала-Тоо Резиденс" ',
    address: "г. Бишкек",
    year: 2024,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/e525/6693/0f475c2c6b2eee669858b65eccdc6cec?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MU6sY830Ex2aHkkCeEkJbzFt4o8HZUGuYkwlDR1W9cLmBExWx2t3sERB8kGQTNTAr9tLfoPxqR~TaZC5sfRYyJ3M7JW5RGPkAjb8gy4vbHwm1YBQhaZndhZ-0Uw~c~cRncWONLh33vzqPThr42VnCjzVGpN28bu87D6XqtBTNoFbAdwDMpBLJl95dxDk8A6CiSxwCGgnfPfE1qLCd8tFxpUP5WyHOQ4Zw2MlKGEWx0rnLZH7uMidPrlEHnSrRG~1TLFGB6k05l1tOcjCRK2bPN0sflhjr-fs4X-sEYEDOiA19BprlTT1xvk98qeet4-yLsvi0WU~uJlWIkn5l9fJKw__",
    title: 'ЖК "Ала-Тоо Резиденс" ',
    address: "г. Бишкек",
    year: 2024,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/264b/ed40/088ed702eaa30e7e597f7bd2dd0cac1c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hrSBJl-oGDLrFoqcWvYokzGagEgDBPi5KIEdcXw-5pLFLLmQ1c9thrEpall-sVbvpKuceKRoRNgwCHLYxnABHULFuRO1SSFnCiWePZl-bm~ld~neLcqjMywfPy~irrAhSmeDv-xqDNBX1wgOP6PJ47~erFxjeWH2TYpxba7ff-isb~bKm3XW~yyDaJ03LN4kPvCb3iVDn7SOEVxeeJqZq25ljWQrMq0BH0Xc9Oh0-HrNtRziiPMO9lzJnfz7V2f169lFvTG81o5Gpx07Ig63IIqEwR6Bv4F5~2xB-6JYjersc2hZAEg9nV56VY79fwlthyZDbFEDnfceABYrMJt-2w__",
    title: 'ЖК "Ала-Тоо Резиденс" ',
    address: "г. Бишкек",
    year: 2024,
  },
];

interface Brand {
  name: string;
  logo: string | null;
}

const brends: Brand[] = [
  { name: "Все", logo: null },
  { name: "Bimkg", logo: logoBim },
  { name: "Promagrad", logo: logoPromgrad },
  { name: "Archi Vibe", logo: logoArchiVibe },
];

const Card = () => {
  const [brend, setBrend] = useState<string>("Все");
  const [quantity, setQuantity] = useState<number>(8);

  return (
    <div id="portfilio" className={scss.Card}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.header}>
            <h2 className={scss.title}>Портфолио</h2>
            <div className={scss.brends}>
              {brends.map((el, idx) => (
                <div
                  key={idx}
                  onClick={() => setBrend(el.name)}
                  className={brend === el.name ? scss.active : ""}
                >
                  {el.logo && <Image src={el.logo} alt={el.name} />}
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={scss.blocks}>
            <PhotoProvider>
              {data.slice(0, quantity).map((el, idx) => (
                <div className={scss.block} key={idx}>
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
            <button onClick={() => setQuantity(quantity + 4)}>
              Показать ещё
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
