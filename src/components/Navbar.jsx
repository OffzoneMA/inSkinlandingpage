import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import Logo from "./Logo";
import styled from "styled-components";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Wrapper>
      <Logo />
      <div className="links">
        <a href="/">{doc[language].title1}</a>
        <a href="/">{doc[language].title2}</a>
        <a href="/">{doc[language].title3}</a>
        <a href="/">{doc[language].title4}</a>
      </div>
      <div className="btn">
        <ButtonPrimary text={doc[language].btn} />
        <ButtonPrimary
          text={language == "en" ? "FR" : "ENG"}
          func={toggleLanguage}
        />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-size: 1rem;
  padding: 0 2rem;
  max-width: 1480px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  /* z-index: 999; */
  .links {
    display: flex;
    gap: 1.7rem;
    a {
      color: var(--blue-dark);
      font-size: clamp(1rem, 1.4vw, 2rem);
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    gap: 0rem;
    .links {
      display: none;
    }
  }
  .btn {
    display: flex;
    gap: 1rem;
  }
  @media (min-width: 2300px) {
    .links a {
      font-size: 2rem;
      /* font-size: clamp(1.5rem, 1vw, 3rem); */
    }
  }
  @media (max-width: 768px) {
    .btn {
      gap: 0.1rem;
    }
  }
  .languageBtn {
    color: var(--white);
    background: var(--pink);
    border: none;
    border-radius: 0.5rem;
    background: var(--pink-light);
    padding: 0.75rem 1rem;
    cursor: pointer;
  }
`;
const doc = {
  en: {
    title1: "Features",
    title2: "Pricing",
    title3: "Careers",
    title4: "Help",
    btn: "get started now",
  },
  fr: {
    title1: "Fonctionnalités",
    title2: "Tarification",
    title3: "Carrières",
    title4: "Aide",
    btn: "commencer maintenant",
  },
};
