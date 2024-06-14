import React from "react";
import styled from "styled-components";
export default function Section3() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <img src="../image/phone.svg" alt="" />
          <div className="column">
            <div className="title">
              Scan the Labels of Your Cosmetic Products
            </div>
            <div className="grid">
              <div className="card">
                <img src="../image/frame20.svg" alt="" className="icon" />
                <div className="info">
                  <h2>Share your discoveries </h2>
                  <p>
                    Be part of a passionate community by sharing your cosmetic
                    favorites and exploring the findings of other users.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src="../image/frame21.svg" alt="" className="icon" />
                <div className="info">
                  <h2>Cosmetic analysis </h2>
                  <p>
                    InSkin analyzes hygiene and cosmetic products. You get a
                    detailed data sheet for each product to help you understand
                    its score.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src="../image/frame22.svg" alt="" className="icon" />
                <div className="info">
                  <h2>Recommendations </h2>
                  <p>
                    When you scan a product that scores poorly, InSkin offers
                    independent recommendations for similar items that are
                    better for your health.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src="../image/frame23.svg" alt="" className="icon" />
                <div className="info">
                  <h2>History </h2>
                  <p>
                    InSkin displays the products you have already scanned. An
                    easy-to-understand color code lets you view the product’s
                    impact on your health.
                  </p>
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
  display: block;
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
  }
`;
