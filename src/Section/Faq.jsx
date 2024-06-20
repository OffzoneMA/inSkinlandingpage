import React from "react";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";

export default function Faq() {
  const { language } = useLanguage();
  const qst = useRef();
  const [showFqs, setShowFqs] = useState(false);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const openFAQs = (e) => {
    const allQst = [...qst.current.querySelectorAll(".item")];
    allQst.forEach((x) => {
      if (e.target !== x) {
        x.style = `height:${x.querySelector("span").offsetHeight}px`;
        x.classList.remove("open");
      }
    });

    const item = e.target;
    const span = item.querySelector("span");
    const content = item.querySelector(".text");
    item.style = `height: ${
      item.classList[1] !== "open"
        ? content.offsetHeight + span.offsetHeight
        : span.offsetHeight
    }px`;
    e.target.classList.toggle("open");
  };

  useEffect(() => {
    window.addEventListener("resize", () => setwindowWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    const items = [...qst.current.querySelectorAll(".item")];
    items.forEach((x) => {
      const span = x.querySelector("span");
      x.style = `height:${span.offsetHeight}px`;
      x.classList.remove("open");
    });
  }, [showFqs, windowWidth]);

  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          FAQ - InSkin: Your Personalized Beauty Guide
        </div>
        <div className="content" ref={qst}>
          {doc[language].faq.map((item, index) => {
            return (
              <div className="item" key={index} onClick={openFAQs}>
                <div className="item-content">
                  <span>{item.title}</span>
                  <div className="text">
                    <p>{item.content}</p>
                  </div>
                </div>
                <div className="btn">
                  <img src="../image/faq.svg" alt="" />
                </div>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  max-height: var(--max-height);
  height: 100vh;
  min-height: 500px;
  margin: 1rem auto;
  display: block;
  padding: 6rem 5rem;
  position: relative;
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    .title {
      color: var(--Neutral-900, #111827);
      font-feature-settings: "liga" off;
      font-family: Inter;
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 4.5rem */
      letter-spacing: -0.075rem;
      margin-bottom: 2rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      .item {
        width: 100%;
        overflow: hidden;
        display: flex;
        padding: 0;
        padding-top: 2rem;
        padding-bottom: 2rem;

        position: relative;
        background-color: var(--white);
        transition: all 300ms ease-out;
        cursor: pointer;
        * {
          pointer-events: none;
          transition: all 200ms ease;
        }
        .item-content {
          display: flex;
          flex-direction: column;
          p {
            margin-top: 1.5rem;
            color: var(--gray-400);
            font-family: var(--ff-primary);
            font-style: normal;
            line-height: 1.75rem;
            font-weight: 100;
            display: block;
            height: 120px;
          }
          span {
            color: var(--gray-600);
            font-family: var(--ff-primary);
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 700;
            line-height: 1.875rem; /* 150% */
          }
        }
        @media (max-width: 768px) {
          padding: 0;
          margin-bottom: 1rem;
          height: auto;
          .item-content {
            p {
              height: auto;
            }
            span {
              font-weight: 600;
            }
          }
        }
      }
    }
    .open {
      .btn {
        transform: rotate(180deg);
      }
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem;
    margin-bottom: 10rem;
  }
`;
const doc = {
  en: {
    header: "FAQ - InSkin: Your Personalized Beauty Guide",
    faq: [
      {
        title: "What is InSkin?",
        content:
          "InSkin is an innovative application dedicated to beauty and cosmetic products. It provides users with a personalized experience in discovering, selecting, and sharing cosmetic products, as well as tips for enhancing their natural beauty.",
      },
      {
        title: "How does InSkin's scanning feature work?",
        content:
          "InSkin's scanning feature allows users to quickly scan cosmetic products using their phone's camera. Once the scan is completed, the application instantly provides essential information about the product, such as the brand, description, user reviews, etc.",
      },

      {
        title: "What types of cosmetic products can I scan with InSkin?",
        content:
          "You can scan a wide range of cosmetic products with InSkin, including products for the face (foundation, moisturizer, etc.), products for the eyes (mascara, eyeshadow, etc.), products for the lips (lipstick, gloss, etc.), and many more.",
      },
      {
        title: "How can I share my discoveries with the InSkin community?",
        content:
          "You can share your discoveries with the InSkin community using the built-in sharing functionality in the application. You have the option to share photos, reviews, makeup tips, etc., with other InSkin users, fostering the exchange and sharing of experiences.",
      },
      {
        title: "Are my personal data secure on InSkin?",
        content:
          "Yes, at InSkin, the security and privacy of our users' personal data are top priorities. We implement robust security measures to protect your personal information against unauthorized access or misuse. You can use InSkin with confidence, knowing that your data is in good hands.",
      },
    ],
  },
  fr: {
    header: "FAQ - InSkin : Votre Guide Beauté Personnalisé",
    faq: [
      {
        title: "Qu'est-ce qu'InSkin ?",
        content:
          "InSkin est une application innovante dédiée à la beauté et aux produits cosmétiques. Elle offre aux utilisateurs une expérience personnalisée en matière de découverte, de sélection et de partage de produits cosmétiques, ainsi que des conseils pour sublimer leur beauté naturelle.",
      },
      {
        title: "Comment fonctionne la fonction de scan d'InSkin ?",
        content:
          "La fonction de scan d'InSkin permet aux utilisateurs de scanner rapidement les produits cosmétiques à l'aide de la caméra de leur téléphone. Une fois le scan effectué, l'application fournit instantanément des informations essentielles sur le produit, telles que la marque, la description, les avis des utilisateurs, etc.",
      },

      {
        title:
          "Quels types de produits cosmétiques puis-je scanner avec InSkin ?",
        content:
          "Vous pouvez scanner une large gamme de produits cosmétiques avec InSkin, notamment les produits pour le visage (fond de teint, crème hydratante, etc.), les produits pour les yeux (mascara, fard à paupières, etc.), les produits pour les lèvres (rouge à lèvres, gloss, etc.), et bien d'autres encore.",
      },
      {
        title:
          "Comment puis-je partager mes découvertes avec la communauté InSkin ?",
        content:
          "Vous pouvez partager vos découvertes avec la communauté InSkin en utilisant la fonctionnalité de partage intégrée à l'application. Vous avez la possibilité de partager des photos, des avis, des conseils de maquillage, etc., avec d'autres utilisateurs d'InSkin, ce qui favorise l'échange et le partage d'expériences.",
      },
      {
        title:
          "Est-ce que mes données personnelles sont sécurisées sur InSkin ?",
        content:
          "Oui, chez InSkin, la sécurité et la confidentialité des données personnelles de nos utilisateurs sont une priorité absolue. Nous mettons en œuvre des mesures de sécurité robustes pour protéger vos informations personnelles contre tout accès non autorisé ou toute utilisation abusive. Vous pouvez utiliser InSkin en toute confiance, sachant que vos données sont entre de bonnes mains.",
      },
    ],
  },
};
