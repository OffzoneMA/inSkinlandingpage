import React from "react";
import styled from "styled-components";
import ButtonPrimary from "../components/ButtonPrimary";
import { useLanguage } from "../LanguageContext";

export default function Section1() {
  const { language } = useLanguage();

  return (
    <Wrapper>
      <div className="container">
        <h2>{doc[language].h2}</h2>
        <h3>{doc[language].h3}</h3>
        <div className="center">
          <h1 className="number">82,915,082</h1>
          <p>{doc[language].p} </p>
          <img className="icon1 icon" src="../image/cosmetic111.svg" alt="" />
          <img className="icon2 icon" src="../image/heartemoji.svg" alt="" />
          <img className="icon3 icon" src="../image/cosmetic4.svg" alt="" />
          <img className="icon4 icon" src="../image/loveIcon.svg" alt="" />
        </div>
        <ButtonPrimary text={doc[language].btn} />
        <img src="../image/cosmetic2.svg" alt="" className="pic pic2" />
        <img src="../image/cosmetic3.svg" alt="" className="pic pic3" />
      </div>
      <div className="image-container">
        {/* <div className="image"> */}
        <img className="image" src="/image/Ellipse.svg" alt="" />
        {/* </div> */}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* padding: 1.8rem 5rem; */
  /* height: 100vh; */
  margin: 4rem auto;
  margin-bottom: 5rem;
  color: var(--blue-dark);
  width: 100%;
  .pic {
    display: none;
  }
  .container {
    display: flex;
    padding: 0rem 10.9rem;
    padding-bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    align-self: stretch;
    h2 {
      text-align: center;
      font-family: Inter;
      font-size: 2.625rem;
      font-style: normal;
      /* font-weight: 600; */
      line-height: 150%;
      letter-spacing: -0.06563rem;
    }
    h3 {
      text-align: center;
      font-feature-settings: "liga" off;
      font-family: var(--ff-primary) !important;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.75rem; /* 155.556% */
      max-width: 60rem;
    }
    .number {
      color: #202020;
      text-align: center;
      font-family: var(--ff-primary) !important;
      font-size: 3.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 4.5rem;
    }
    .center {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    @media (max-width: 768px) {
      padding: 2rem 1rem;
      .number {
        font-size: 2.75rem;
      }
      h2 {
        font-size: 1.75rem;
        /* font-weight: 700; */
      }
      h3 {
        width: 100%;
        font-size: 1rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
  .image-container {
    margin-top: -5rem;
    height: 35rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image {
    /* background-image: url("/image/Ellipse.svg"); */
    /* height: 100%; */
    height: 43.75rem;
    width: var(--max-width + 1rem);
    /* background-repeat: no-repeat; */
    background-size: contain;
    margin: 0 auto;
    /* display: block; */
    transform: translateY(11rem);

    /* margin: 0 auto; */
    /* width: 100%; */
    /* max-width: calc(var(--max-width) + 1rem); */
    /* max-height: 700px; */
  }
  @media (max-width: 768px) {
    margin: 0;
    /* margin-bottom: -8rem; */

    position: relative;
    overflow: hidden;
    .image-container {
      height: 20rem;
      overflow: hidden;
      margin-bottom: 1rem;
    }
    .image {
      width: 750px;
      /* height: 20rem; */
      transform: translate(-35px, 6rem);
      background-size: contain;
    }
    .pic {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 30%;
      animation: moveUpDown 3s ease-in-out infinite;
    }
    .pic2 {
      left: 18rem;
      top: 18rem;
    }
    .pic3 {
      left: -2rem;
      top: 19rem;
    }
    .icon {
      display: none;
    }
  }
  .icon1 {
    position: absolute;
    left: -18rem;
    top: -3rem;
  }
  .icon2 {
    position: absolute;
    right: -18rem;
    top: 0rem;
  }
  .icon3 {
    position: absolute;
    left: -11rem;
    top: 10rem;
    width: 45%;
  }
  .icon4 {
    position: absolute;
    right: -10rem;
    top: 12rem;
    width: 45%;
  }
  @media (max-width: 768px) {
    .icon3 {
      top: 12rem;
      left: -5rem;
    }
  }
  .icon {
    animation: moveUpDown 2.4s ease-in-out infinite;
    z-index: 999;
  }
  @keyframes moveUpDown {
    0%,
    100% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;
const doc = {
  en: {
    h2: "Embark on a new dimension of elegance with InSkin",
    h3: "Our groundbreaking app guides you through the world of cosmetics, helping you choose, enhance, and share your discoveries in a unique manner.",
    p: "Products saved by our users",
    btn: "get started now",
  },
  fr: {
    h2: "Explorez une nouvelle dimension de l'élégance avec InSkin",
    h3: "Notre application révolutionnaire vous guide dans l'univers des cosmétiques, vous aidant à choisir, sublimer et partager vos découvertes de manière unique.",
    p: "Produits enregistrés par nos utilisateurs",
    btn: "commencer maintenant",
  },
};
