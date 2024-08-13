import React from "react";
import styled from "styled-components";
import { Navbar } from "../components";
import { useLanguage } from "../LanguageContext";

function Hero() {
  const { language } = useLanguage();

  return (
    <Wrapper>
      <Navbar />
      <div className="container">
        <div className="info">
          <h1>{doc[language].h1}</h1>
          <p>{doc[language].p}</p>
          <div className="links">
            <a href="/">
              <img src="../image/app_store_en.svg" alt="" />
            </a>
            <a href="/">
              <img src="../image/google_play_en.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="imgC">
          <img src="../image/Background-hero.svg" alt="" />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 1.8rem 5rem;
  padding-top: 1.2rem;
  height: 100vh;
  max-height: 1300px;
  background: url("/image/Background-hero.svg") center/cover no-repeat;
  /* display: flex;
  flex-direction: column; */
  overflow-x: hidden;
  @media (max-width: 768px) {
    background: var(--gradient);
    height: auto;
    max-height: fit-content;
    padding: 1rem 1.2rem;
    padding-bottom: 0;
  }
  .container {
    .imgC {
      display: none;
    }
    @media (max-width: 768px) {
      .imgC {
        /* width: 100%;
        height: 100%; */
        display: block;
        transform: translateX(calc(-5rem + -200%));
        img {
          width: 400%;
        }
      }
      .img {
        /* display: block;
      background: url("/image/Background-hero.svg");
      background-repeat: no-repeat;
      background-size: contain;
      height: 100%;
      width: 100%;
      position: absolute;
      left: -85%;
      margin-top: -2rem;
      z-index: 0; */
      }
      /* margin-bottom: 70%; */
    }
    @media (max-width: 768px) {
    }
    max-width: var(--max-width);
    margin: 0 auto;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 43.5rem;
      gap: 1.5rem;
      padding: 10rem 3rem 0rem 0rem;
      h1 {
        font-family: "Inter";
        font-size: 3.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 4.5rem; /* 120% */
        letter-spacing: -0.09375rem;
        color: var(--blue-dark);
        font-feature-settings: "liga" off;
      }
      p {
        color: var(--Neutral-700, #374151);
        font-feature-settings: "liga" off;
        font-family: var(--ff-primary);
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
      }
      .links {
        display: flex;
        gap: 2rem;
        img {
          background: var(--dark);
          border-radius: 0.5rem;
          z-index: 1;
          position: relative;
        }
      }
    }
    @media (max-width: 768px) {
      .info {
        align-items: center;
        width: 100%;
        padding: 0;
        padding-top: 25%;
        h1 {
          text-align: center;
          font-size: 2.55rem;
        }
        p {
          text-align: center;
          font-size: 1rem;
        }
        .links {
          align-self: center;
        }
      }
    }
  }
  /* @media (max-width: 768px) {
      padding: 1rem 1.2rem;
    } */
`;
export default Hero;
const doc = {
  en: {
    h1: "Explore Elegance in Your Own Way",
    p: "InSkin is your companion for selecting, enhancing, and sharing the splendor of your cosmetic discoveries with the world.",
  },
  fr: {
    h1: "Explorez l'élégance à votre manière",
    p: "InSkin vous accompagne pour choisir, sublimer et partager la splendeur de vos découvertes cosmétiques avec le monde.",
  },
};
