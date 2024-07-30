import React from "react";
import styled from "styled-components";
import { useLanguage } from "../LanguageContext";

export default function Section3() {
  const { language } = useLanguage();

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <img src="../image/phone.svg" alt="" />
          <div className="column">
            <div className="title">{doc[language].header}</div>
            <div className="grid">
              <div className="card">
                <img src="../image/Frame20.svg" alt="" className="icon" />
                <div className="info">
                  <h2>{doc[language].title1} </h2>
                  <p>{doc[language].p1}</p>
                </div>
              </div>
              <div className="card">
                <img src="../image/Frame21.svg" alt="" className="icon" />
                <div className="info">
                  <h2>{doc[language].title2} </h2>
                  <p>{doc[language].p2}</p>
                </div>
              </div>
              <div className="card">
                <img src="../image/Frame22.svg" alt="" className="icon" />
                <div className="info">
                  <h2>{doc[language].title3} </h2>
                  <p>{doc[language].p3}</p>
                </div>
              </div>
              <div className="card">
                <img src="../image/Frame23.svg" alt="" className="icon" />
                <div className="info">
                  <h2>{doc[language].title4} </h2>
                  <p>{doc[language].p4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  height: 100vh;
  /* min-height: 100vh; */
  margin: 0 auto;
  /* display: block; */
  /* padding: 1.8rem 5rem; */
  max-height: var(--max-height);
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    .title {
      color: var(--blue-dark);
      font-feature-settings: "liga" off;
      font-family: Inter;
      font-size: 2.25rem;
      font-style: normal;
      line-height: 130%;
      letter-spacing: -0.05rem;
    }
    h2 {
      color: #111827;
      font-family: var(--ff-primary);
      font-size: 1.5rem;
      font-style: normal;
      line-height: 1.75rem;
    }
    p {
      color: var(--Neutral-700);
      font-family: var(--ff-primary);
      font-style: normal;
      font-size: 0.8rem;
      font-weight: 300;
      line-height: 1.5rem;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 3.5rem;
    }
    .row {
      display: flex;
      gap: 0.3rem;
      align-items: center;
    }
    .column {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }
    .card {
      display: flex;
      gap: 1.4rem;
    }
    .icon {
      align-self: self-start;
      width: 4rem;
      height: 4rem;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }
    @media (max-width: 768px) {
      .title {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.8rem;
      }
      .grid {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
      }
      .row {
        flex-direction: column;
      }
      /* margin-bottom: 100rem; */
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    height: auto;
  }
`;
const doc = {
  en: {
    header: "Scan the Labels of Your Cosmetic Products",
    title1: "Share your discoveries",
    p1: "Be part of a passionate community by sharing your cosmetic favorites and exploring the findings of other users.",
    title2: "Cosmetic analysis",
    p2: "InSkin analyzes hygiene and cosmetic products. You get a detailed data sheet for each product to help you understand its score.",
    title3: "Recommendations",
    p3: "When you scan a product that scores poorly, InSkin offers independent recommendations for similar items that are better for your health.",
    title4: "History",
    p4: "InSkin displays the products you have already scanned. An easy-to-understand color code lets you view the product’s impact on your health.",
  },
  fr: {
    header: "Scanner les étiquettes de vos produits cosmétiques",
    title1: "Partagez vos découvertes",
    p1: "Faites partie d'une communauté passionnée en partageant vos produits cosmétiques préférés et en explorant les découvertes d'autres utilisateurs.",
    title2: "Analyse cosmétique",
    p2: "InSkin analyse des produits d'hygiène et cosmétiques. Vous obtenez une fiche détaillée pour chaque produit afin de vous aider à comprendre son score.",
    title3: "Recommandations",
    p3: "Lorsque vous analysez un produit qui obtient un mauvais score, InSkin propose des recommandations indépendantes pour des articles similaires qui sont meilleurs pour votre santé",
    title4: "Historique",
    p4: "InSkin affiche les produits que vous avez déjà analysés. Un code couleur facile à comprendre vous permet de visualiser l'impact du produit sur votre santé.",
  },
};
