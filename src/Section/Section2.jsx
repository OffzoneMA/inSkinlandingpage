import React from "react";
import styled from "styled-components";
export default function Section2() {
  return (
    <Wrapper>
      <div className="container">
        <h1>Discover the InSkin experience now!</h1>
        <div className="grid">
          <div className="card card1">
            <div className="title">
              <img className="icon"></img>
              <h2>Scan in an instant</h2>
            </div>
            <p>
              Utilize InSkin's scanning feature to swiftly access essential
              information about your favorite cosmetic products, as well as
              reviews from makeup enthusiasts.
            </p>
          </div>
          <div className="card card2">
            <div className="title">
              <img className="icon"></img>
              <h2>Enhance your beauty</h2>
            </div>
            <p>
              Uncover tips for selecting your makeup products and receive
              personalized recommendations to enhance your natural beauty.
            </p>
          </div>
          <div className="card card3">
            <div className="title">
              <img className="icon"></img>
              <h2>Choose with wisdom</h2>
            </div>
            <p>
              InSkin guides you in selecting products suited to your style and
              skin, enabling you to make informed choices for your beauty
              routine and organize your preferences by category.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  /* background-color: red; */
  max-height: var(--max-height);
  height: 100vh;
  min-height: 100vh;
  padding: 1.8rem 5rem;
  margin: 0 auto;
  display: block;
  .container {
    /* max-width: var(--max-width); */
    /* margin: 3rem auto; */
    h1 {
      /* font-feature-settings: "liga" off;
      align-self: stretch;
      font-family: Inter;
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 4.5rem */
      /* letter-spacing: -0.075rem;  */
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a b"
      "c c";
    .card {
      display: flex;
      padding: 2.8rem;
      padding-bottom: 0;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
      flex: 1 0 0;
      align-self: stretch;
      border-radius: 2rem;
      background: var(--gray-100);
      h2 {
        color: var(--blue-dark);
        font-family: Inter;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 2.6rem */
        letter-spacing: -0.05rem;
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
    }
    .title {
      align-self: stretch;
    }
  }
`;
