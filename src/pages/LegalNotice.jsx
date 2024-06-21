import React from "react";
import styled from "styled-components";
import { useLanguage } from "../LanguageContext";

export default function LegalNotice() {
  const { language } = useLanguage();
  function createMarkup(text) {
    // uses the text assuming it might contain HTML-like strings.
    // Ensure to sanitize `text` here to prevent XSS attacks.
    return { __html: text };
  }
  return (
    <Wrapper>
      <div className="container">
        <h1>{doc[language].header}</h1>
        {doc[language].content.map((section, index) => (
          <>
            <div className="title">{section.title}</div>
            <p>
              {section.text.map((element, index) => (
                <>
                  <p
                    key={index}
                    dangerouslySetInnerHTML={createMarkup(element)}
                  ></p>
                </>
              ))}
            </p>
          </>
        ))}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 5rem auto;
  max-width: var(--max-width);
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 1.5rem */
  letter-spacing: -0.01rem;
  color: var(--dark);
  h1 {
    color: var(--Neutral-900);
    font-family: Inter;
    text-transform: capitalize;
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.075rem;
  }
  .title {
    color: var(--pink);
    margin: 2rem 0;
  }
  p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.01rem;
  }
  ul {
    padding-left: 2rem;
  }
  li {
    list-style-type: disc;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    h1 {
      text-align: center;
    }
  }
`;
const doc = {
  en: {
    header: "Legal Notice",
    content: [
      {
        title: "Publisher of the Website and Application",
        text: [
          "The Website and InSkin Application are published by Offzone, a limited liability company with a capital of 100,000 DH, registered with the Taza Trade Register under number 6429.",
        ],
      },
      {
        title: "Publication Director",
        text: ["The Publication Director is Mr. Safouan CHALOUAH."],
      },
      {
        title: "Website Host",
        text: [
          "As a provider of a service that operates, manages, and backs up personal data and in compliance with Moroccan regulations, Offzone utilizes the services of Contabo for hosting personal data.",
          "Whose registered office is located at: Aschauer Straße 32a 81549 Munich, Germany.",
          "Location of the Datacenters where the InSkin Application is hosted: Frankfurt, Germany.",
        ],
      },
    ],
  },
  fr: {
    header: "Mentions Légales",
    content: [
      {
        title: "Éditeur du Site et de l’Application",
        text: [
          "Le Site et l’Application InSkin sont édités par Offzone, société à responsabilité limitée au capital de 100 000 DH, immatriculée au registre de commerce de Taza sous le numéro 6429.",
        ],
      },
      {
        title: "Le Directeur de la publication",
        text: ["Le Directeur de la publication est Monsieur Safouan CHALOUAH."],
      },
      {
        title: "Hébergeur du Site",
        text: [
          "En tant que fournisseur d'un service exploitant, administrant et sauvegardant des données à caractère personnel et en conformément à la réglementation marocaine. Offzone fait appel aux services de la société Contabo pour l’hébergement des données à caractère personnel.",
          "Dont le siège social est situé à : Aschauer Straße 32a 81549 Munich, Allemagne.",
          "Localisation des Datacenters ou l’Application InSkin est hébergée : Frankfurt, Allemagne.",
        ],
      },
    ],
  },
};
