import React from "react";
import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";
import Logo from "./Logo";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
export default function Footer() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <img src="../image/cosmetic1.svg" alt="" className="pic pic1" />
        <img src="../image/cosmetic2.svg" alt="" className="pic pic2" />
        <img src="../image/cosmetic3.svg" alt="" className="pic pic3" />
        <div className="row">
          <h1>{doc[language].title}</h1>
          <div className="img">
            <img src="../image/iphone.svg" alt="" />
          </div>
        </div>
        <div className="contact">
          <div className="column">
            <div className="img">
              <img src="../image/message-text.svg" alt="" />
            </div>
            <div className="form">
              <div className="question">{doc[language].contact.title}</div>
              <div className="inputs">
                <input
                  type="text"
                  className="name"
                  name="name"
                  placeholder={doc[language].contact.inputs[0]}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  className="email"
                  name="email"
                  placeholder={doc[language].contact.inputs[1]}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="subject"
                  name="subject"
                  placeholder={doc[language].contact.inputs[2]}
                  onChange={handleChange}
                />
                <textarea
                  className="message"
                  name="message"
                  placeholder={doc[language].contact.inputs[3]}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="btn">
              <SubmitButton
                text={doc[language].contact.button}
                icon={"../image/arrow-right.svg"}
                data={formData}
              />
            </div>
            <div className="separator"></div>
            <div className="infos">
              <div className="logo">
                <Logo />
              </div>

              <div className="items">
                <div className="info">
                  <h4>{doc[language].links.project.title}</h4>
                  {doc[language].links.project.items.map((item, index) => (
                    <a key={index} href="#">
                      {item}
                    </a>
                  ))}
                </div>
                <div className="info">
                  <h4>{doc[language].links.application.title}</h4>
                  {doc[language].links.application.items.map((item, index) => (
                    <a key={index} href="#">
                      {item}
                    </a>
                  ))}
                </div>

                <div className="info">
                  <h4>{doc[language].links.usefulLinks.title}</h4>
                  {doc[language].links.usefulLinks.items.map((item, index) => (
                    <a key={index} href="#">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div className="links">
                <a href="/">
                  <img src="../image/app_store_en.svg" alt="" />
                </a>
                <a href="/">
                  <img src="../image/google_play_en.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          {/* <div className="copyright">
            <p>© {new Date().getFullYear()} InSkin - All rights reserved</p> |{" "}
            <a href="privacy-policy">Privacy Policy</a> |{" "}
            <a href="terms-of-use"> Terms of Use </a> |{" "}
            <a href="legal-notice"> Legal Notice </a>
          </div> */}
          <div className="copyright">
            <p>{doc[language].copyrights[0]}</p> |{" "}
            <Link to="/privacy-policy">{doc[language].copyrights[1]}</Link> |{" "}
            <Link to="/terms-of-use">{doc[language].copyrights[2]}</Link> |{" "}
            <Link to="/legal-notice">{doc[language].copyrights[3]}</Link>
          </div>
          <div className="social-links">
            <a href="">
              <img src="../image/instagram.svg" alt="" />
            </a>
            <a href="">
              <img src="../image/facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="../image/twitter.svg" alt="" />
            </a>
            <a href="">
              <img src="../image/linkedin.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 4rem 3rem;
  background: var(--pink-lighter1);
  @media (max-width: 768px) {
    padding: 0;
  }
  .container {
    margin: 0 auto;
    max-width: var(--max-width);
    position: relative;
    .pic {
      position: absolute;
      z-index: 1;
      animation: moveUpDown 4s ease-in-out infinite;
    }
    .pic1 {
      left: -16rem;
      top: -3rem;
    }
    .pic2 {
      left: -9rem;
      top: 17rem;
    }
    .pic3 {
      top: -11rem;
      right: 22rem;
    }

    .row {
      display: flex;
      gap: 2rem;
      .img > img {
        /* z-index: 0; */
        position: relative;
        /* right: -80%; */
      }
      h1 {
        color: var(--pink);
        font-family: Inter;
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -0.05938rem;
        align-self: stretch;
        padding-top: 8rem;
        padding-left: 3rem;
      }
    }
    .column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .img > img {
        border-radius: 50%;
        background: var(--EA6479, #ea6479);
        width: 4rem;
        height: 4rem;
        padding: 1rem;
        @media (max-width: 768px) {
          position: absolute;
          left: 2rem;
          top: 4rem;
          width: 3.5rem;
          height: 3.5rem;
        }
      }
      .separator {
        height: 0.125rem;
        opacity: 0.5;
        background: var(--pink-light);
      }
      .infos {
        display: flex;
        justify-content: space-between;
        .info {
          display: flex;
          flex-direction: column;
          a {
            transition: 0.3s;
            &:hover {
              color: #000;
            }
          }
        }
        h4 {
          color: var(--gray-800);
          font-family: Inter;
          font-size: 1.125rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.375rem;
          margin-bottom: 1rem;
        }
        a {
          color: var(--gray-600);
          font-family: var(--ff-primary);
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.5625rem;
        }
        @media (max-width: 768px) {
          .info {
            a {
              font-size: 0.7rem;
            }
          }
          h4 {
            font-size: 1rem;
          }
        }
        .items {
          display: flex;
          gap: 2rem;
        }
        .links {
          display: flex;
          gap: 1rem;
          img {
            background: var(--dark);
            border-radius: 0.5rem;
          }
        }
      }
    }
    .btn {
      align-self: end;
    }
    .contact {
      position: relative;
      border-radius: 2rem;
      padding: 3rem;
      box-shadow: 0px 143px 80px 0px rgba(113, 9, 9, 0.05),
        0px 52.197px 29.201px 0px rgba(113, 9, 9, 0.04),
        0px 25.341px 14.177px 0px rgba(113, 9, 9, 0.03),
        0px 12.423px 6.95px 0px rgba(113, 9, 9, 0.03),
        0px 4.912px 2.748px 0px rgba(113, 9, 9, 0.02);
      background: url("/image/footer-Background.svg") center/cover no-repeat;
      .form {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        .question {
          color: var(--dark);
          font-family: Inter;
          font-size: 2rem;
          font-style: normal;
          font-weight: 400;
          line-height: 2.32394rem;
          letter-spacing: -0.02rem;
        }
        @media (max-width: 768px) {
          .question {
            font-size: 1.5rem;
            padding-left: 3.5rem !important;
            margin-top: -1.4rem !important;
          }
        }
        input,
        textarea {
          padding: 0.5rem 1rem;
          border-radius: 0.625rem;
          border: 1px solid var(--pink);
          background: rgba(255, 255, 255, 0.2);
          width: 17rem;
          height: 3rem;
          &:focus {
            outline: none;
            box-shadow: 0px 0px 0px 4px rgba(234, 100, 121, 0.25);
          }
        }
        textarea {
          height: auto;
        }
        .inputs {
          display: grid;
          gap: 1rem 1.5rem;

          grid-template-areas:
            "a d"
            "b d"
            "c d";
        }
        .name {
          grid-area: a;
        }
        .email {
          grid-area: b;
        }
        .subject {
          grid-area: c;
        }
        .message {
          grid-area: d;
        }
      }
    }
    @media (max-width: 768px) {
      .row {
        .img {
          display: none;
        }
        h1 {
          font-size: 1.4rem;
          text-align: center;
          /* width: 100%; */
          padding: 1rem;
          align-self: center;
          position: relative;
          z-index: 999;
          margin-bottom: 2.5rem;
        }
      }
      .pic1 {
        left: -5.5rem;
        top: 8rem;
        width: 60%;
        z-index: 0;
      }
      .pic2 {
        left: -11rem;
        top: 17rem;
        display: none;
      }
      .pic3 {
        top: -11rem;
        right: 18rem;
        display: none;
      }
      .contact {
        .form {
          z-index: 999;
          position: relative;
          flex-direction: column;
          gap: 3rem;
          align-items: center;
          .question {
            padding-left: 4rem;
          }
          .inputs {
            /* display: grid;
            gap: 1rem 1.5rem; */
            width: 100%;
            grid-template-areas:
              "a "
              "b "
              "c "
              "d ";
          }
          input,
          textarea {
            width: 100%;
            height: 4rem;
          }
          textarea {
            height: 9rem;
          }
        }
      }
    }
    .copyrights {
      padding: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .copyright {
        p,
        a {
          color: var(--gray-600);
          text-align: center;
          font-family: var(--ff-primary);
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 82%;
          display: inline-block;
          transition: 0.3s;
          &:hover {
            color: #000;
          }
        }
      }
      .social-links {
        display: flex;
        gap: 1rem;
        a {
          background: var(--pink);
          height: 44px;
          width: 44px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          transition: 0.3s;
          &:hover {
            background: var(--pink-dark);
          }
        }
      }
    }
    @media (max-width: 768px) {
      .btn {
        align-self: start;
      }
      .infos {
        flex-direction: column;
        gap: 3rem;
        align-items: center;
      }
      .copyrights {
        flex-direction: column;
        gap: 2rem;
        .copyright {
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
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
    title:
      "As a leader in innovation in the cosmetic industry, InSkin is committed to providing an exceptional, safe, and effective user experience.",
    contact: {
      title: "How can we help you?",
      inputs: [
        "Enter Full Name",
        "Enter your email",
        "Subject",
        "Write Your Message",
      ],
      button: ["send message", "Sent"],
    },
    links: {
      project: {
        title: "Project",
        items: ["team", "independence"],
      },
      application: {
        title: "Application",
        items: ["Features", "Premium version", "Questions ?"],
      },
      usefulLinks: {
        title: "Useful links",
        items: ["Contact us", "Press", "Legal notice"],
      },
    },
    copyrights: [
      `© ${new Date().getFullYear()} InSkin - All rights reserved`,
      "Privacy Policy",
      "Terms of Use",
      "Legal Notice",
    ],
  },
  fr: {
    title:
      "En tant que leader de l'innovation dans l'industrie cosmétique, InSkin s'engage à fournir une expérience utilisateur exceptionnelle, sûre et efficace.",
    contact: {
      title: "Comment pouvons-nous vous aider ?",
      inputs: [
        "Saisissez votre nom complet",
        "Saisissez votre adresse e-mail",
        "Objet",
        "Rédigez votre message",
      ],
      button: ["envoyer le message", "Envoyé"],
    },
    links: {
      project: {
        title: "Projet",
        items: ["équipe", "indépendance"],
      },
      application: {
        title: "Application",
        items: ["Fonctionnalités", "Version premium", "Des questions ?"],
      },
      usefulLinks: {
        title: "Liens utiles",
        items: ["Contactez-nous", "Presse", "Mentions légales"],
      },
    },
    copyrights: [
      `© ${new Date().getFullYear()} InSkin - Tous droits réservés`,
      "Politique de confidentialité",
      "Conditions d'utilisation",
      "Mentions légales",
    ],
  },
};
