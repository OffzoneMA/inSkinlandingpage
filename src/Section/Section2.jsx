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
              <img src="../image/Frame17.svg" alt="" className="icon" />
              <h2>Scan in an instant</h2>
            </div>
            <p>
              Utilize InSkin's scanning feature to swiftly access essential
              information about your favorite cosmetic products, as well as
              reviews from makeup enthusiasts.
            </p>
            <div className="image">
              <img src="../image/iphone.svg" alt="" className="" />
            </div>
          </div>
          <div className="card card2">
            <div className="title">
              <img src="../image/Frame18.svg" alt="" className="icon" />
              <h2>Enhance your beauty</h2>
            </div>
            <p>
              Uncover tips for selecting your makeup products and receive
              personalized recommendations to enhance your natural beauty.
            </p>
            <div className="image">
              <img src="../image/women.svg" alt="" />
            </div>
          </div>
          <div className="card row-card  card3">
            <div>
              <div className="title">
                <img src="../image/Frame19.svg" alt="" className="icon" />
                <h2>Choose with wisdom</h2>
              </div>
              <p>
                InSkin guides you in selecting products suited to your style and
                skin, enabling you to make informed choices for your beauty
                routine and organize your preferences by category.
              </p>
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
        /* width:s 1fr; */
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
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
    }
    .row-card {
      flex-direction: row;
      height: 28rem;
      text-align: start;
      align-items: flex-start;
      position: relative;
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
    }
    .title {
      align-self: stretch;
    }
  }
`;
