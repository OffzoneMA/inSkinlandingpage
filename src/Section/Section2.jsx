import React from "react";
import styled from "styled-components";
export default function Section2() {
  return (
    <Wrapper>
      <div className="container">
        <h1>Discover the InSkin experience now!</h1>
        <div className="grid"></div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-color: red;
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
`;
