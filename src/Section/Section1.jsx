import React from "react";
import styled from "styled-components";
import ButtonPrimary from "../components/ButtonPrimary";
export default function Section1() {
  return (
    <Wrapper>
      <div className="container">
        <h2>Embark on a new dimension of elegance with InSkin</h2>
        <h3>
          Our groundbreaking app guides you through the world of cosmetics,
          helping you choose, enhance, and share your discoveries in a unique
          manner.
        </h3>
        <div className="center">
          <h1 className="number">82,915,082</h1>
          <p>Products saved by our users</p>
          <img className="icon2" src="../image/heartemoji.svg" alt="" />
          <img className="icon1" src="../image/cosmetic111.svg" alt="" />
        </div>
        <ButtonPrimary text={"get started now"} />
      </div>
      <div className="image">
        {/* <img src="../image/Ellipse.svg" alt="" /> */}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* padding: 1.8rem 5rem; */
  /* height: 100vh; */
  max-height: var(--max-height);
  margin: 4rem auto;
  margin-bottom: 0;
  color: var(--blue-dark);
  .container {
    display: flex;
    padding: 0rem 10.9rem;
    padding-bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    align-self: stretch;
    h2 {
      text-align: center;
      font-feature-settings: "liga" off;
      font-family: Inter;
      font-size: 2.625rem;
      font-style: normal;
      /* font-weight: 600; */
      line-height: 150%;
      letter-spacing: -0.06563rem;
    }
    h3 {
      text-align: center;
      font-feature-settings: "liga" off;
      font-family: var(--ff-primary);
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.75rem; /* 155.556% */
      width: 80%;
    }
    .number {
      color: #202020;
      text-align: center;
      font-family: var(--ff-primary);
      font-size: 3.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 4.5rem;
    }
    .center {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
  }
  .image {
    background-image: url("/image/Ellipse.svg");
    height: 100vh;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 auto;
    display: block;
    width: 100%;
    max-width: var(--max-width);
    max-height: 700px;
  }
  .icon1 {
    position: absolute;
    left: -18rem;
    top: -3rem;
  }
  .icon2 {
    position: absolute;
    right: -18rem;
    top: 0rem;
  }
`;
