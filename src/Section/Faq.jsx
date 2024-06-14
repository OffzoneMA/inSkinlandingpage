import React from "react";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
export default function Faq() {
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
          {data.map((item, index) => {
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
            font-family: "DM Sans";
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 700;
            line-height: 1.875rem; /* 150% */
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
`;
const data = [
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
];
