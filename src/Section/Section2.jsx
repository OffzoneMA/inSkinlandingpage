import React from "react";
import styled from "styled-components";
import { useLanguage } from "../LanguageContext";

export default function Section2() {
  const { language } = useLanguage();

  return (
    <Wrapper>
      <div className="container">
        <h1>{doc[language].header}</h1>
        <div className="grid">
          <div className="card card1">
            <div className="title">
              <img src="../image/Frame17.svg" alt="" className="icon" />
              <h2>{doc[language].title1}</h2>
            </div>
            <p>{doc[language].p1}</p>
            <div className="image">
              <img src="../image/iphone1.svg" alt="" className="phoneImg" />
            </div>
          </div>
          <div className="card card2">
            <div className="title">
              <img src="../image/Frame18.svg" alt="" className="icon" />
              <h2>{doc[language].title2}</h2>
            </div>
            <p>{doc[language].p2}</p>
            <div className="image">
              <img src="../image/women.svg" alt="" />
            </div>
          </div>
          <div className="card row-card  card3">
            <div>
              <div className="title">
                <img src="../image/Frame19.svg" alt="" className="icon" />
                <h2>{doc[language].title3}m</h2>
              </div>
              <p>{doc[language].p3}</p>
            </div>
            <div className="image">
              <img src="../image/image3.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  /* background-color: red; */
  /* max-height: var(--max-height); */
  /* height: 100vh;
  min-height: 100vh; */
  padding: 1.8rem 5rem;
  padding-top: 0;
  margin: 0 auto;
  display: block;
  /* padding: 1.8rem 5rem; */
  .container {
    /* overflow: hidden; */
    max-width: var(--max-width);
    margin: 0 auto;
    /* margin: 3rem auto; */
    h1 {
      font-feature-settings: "liga" off;
      align-self: stretch;
      font-family: Inter;
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: -0.075rem;
    }
    @media (max-width: 768px) {
      padding: 2rem 1rem;
      h1 {
        font-size: 2.2rem;
        font-weight: 500;
      }
    }
  }

  .icon {
    width: 4rem;
    height: 4rem;
  }
  .title {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .grid {
    margin: 2.6rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr 1fr; */
    gap: 2.6rem;
    grid-template-areas:
      "a b"
      "c c";
    .card {
      overflow: hidden;
      display: flex;
      padding: 2.8rem;
      padding-bottom: 0;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
      flex: 1 0 0;
      /* align-self: stretch; */
      justify-content: space-between;
      border-radius: 2rem;
      background: var(--gray-100);
      .image {
        mix-blend-mode: multiply;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .phoneImg {
        transform: translateY(7%);
      }
      h2 {
        color: var(--blue-dark);
        font-family: Inter;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        letter-spacing: -0.05rem;
      }
      @media (max-width: 768px) {
        .image {
          img {
            transform: translateY(10%);
          }
        }
        .phoneImg {
          transform: translateY(17%) !important;
        }
        padding: 2rem 1.25rem;
        .icon {
          width: 3rem;
          height: 3rem;
        }
        h2 {
          font-weight: 500;
          font-size: 1.5rem;
        }
      }
    }
    .row-card {
      flex-direction: row;
      height: 28rem;
      text-align: start;
      align-items: flex-start;
      position: relative;
      overflow: visible !important;

      div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 50%;
      }
      .image {
        img {
          position: absolute;
          width: 62%;
          overflow: visible;
          z-index: 999;
          top: 0;
          right: 0;
        }
      }
    }
    .card1 {
      grid-area: a;
    }
    .card2 {
      grid-area: b;
    }
    .card3 {
      grid-area: c;
      overflow: visible;
    }
    .title {
      align-self: stretch;
    }
    @media (max-width: 768px) {
      grid-template-columns: 99%;
      justify-content: center;
      grid-template-areas:
        "a"
        "b"
        "c";
      .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
      }

      p {
        font-size: 0.8rem;
        margin-left: 3.5rem;
      }
      .row-card {
        flex-direction: column;
        height: 40rem;
        /* align-items: flex-start; */

        div {
          width: 100%;
          div {
            display: flex;
            flex-direction: row;
          }
        }
        .image {
          img {
            /* position: absolute; */
            height: 50%;
            top: auto;
            bottom: 12%;
            left: 5rem;
          }
        }
      }
    }
    .card {
      /* width: 80%; */
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    /* margin-top: 26rem; */
    h2 {
      font-weight: 400;
      font-size: 1.8rem;
    }
  }
`;
const doc = {
  en: {
    header: "Discover the InSkin experience now!",
    title1: "Scan in an instant",
    p1: "Utilize InSkin's scanning feature to swiftly access essential information about your favorite cosmetic products, as well as reviews from makeup enthusiasts.",
    title2: "Enhance your beauty",
    p2: "Uncover tips for selecting your makeup products and receive personalized recommendations to enhance your natural beauty.",
    title3: "Choose with wisdom",
    p3: "InSkin guides you in selecting products suited to your style and skin, enabling you to make informed choices for your beauty routine and organize your preferences by category.",
  },
  fr: {
    header: "Découvrez l'expérience InSkin maintenant!",
    title1: "Scannez en un instant",
    p1: "Utilisez la fonction de scan InSkin pour accéder rapidement aux informations essentielles sur vos produits cosmétiques préférés. Ainsi qu’aux avis des passionnées du maquillage.",
    title2: "Sublimez votre Beauté",
    p2: "Découvrez des conseils pour choisir vos produits de maquillage et recevez des recommandations personnalisées pour sublimer votre beauté naturelle.",
    title3: "Choisissez avec sagesse",
    p3: "InSkin vous guide dans le choix des produits adaptés à votre style et à votre peau, vous permettant de faire des choix éclairés pour votre routine beauté et d’organiser vos préférences par catégorie.",
  },
};
