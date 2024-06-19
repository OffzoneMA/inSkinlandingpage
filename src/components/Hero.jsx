import React from "react";
import styled from "styled-components";
import { Navbar } from "../components";
function Hero() {
  return (
    <Wrapper>
      <Navbar />
      <div className="container">
        <div className="info">
          <h1>Explore Elegance in Your Own Way</h1>
          <p>
            InSkin is your companion for selecting, enhancing, and sharing the
            splendor of your cosmetic discoveries with the world.
          </p>
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
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 1.8rem 5rem;
  height: 100vh;
  max-height: var(--max-height);
  background: url("/image/Background-hero.svg") center/cover no-repeat;
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 43.5rem;
      gap: 3.25rem;
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
          font-size: 2.5rem;
        }
        p {
          text-align: center;
        }
        .links {
          align-self: center;
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
  }
`;
export default Hero;
