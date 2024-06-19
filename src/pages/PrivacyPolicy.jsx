import React from "react";
import styled from "styled-components";
export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <div className="container">
        <h1>privacy policy</h1>
        <div className="title">Preamble</div>
        <p>
          The protection and confidentiality of your data are of paramount
          importance to us. We are committed to scrupulously respecting the
          rules regarding the protection of personal data. Therefore, we invite
          you to carefully read this Privacy Policy. Its purpose is to present
          to you how we process your data when you use the InSkin application,
          as well as how you can exercise your rights. OFFZONE is committed to
          complying with Moroccan regulations on the protection of personal
          data, in accordance with Law No. 09-08 promulgated by Dahir 1-09-15 of
          February 18, 2009.
        </p>
        <div className="title">Definitions</div>
        <p>
          <strong>Content:</strong> All elements constituting the information
          present on the application, including texts, images, videos, and
          documents.
          <br />
          <strong>User</strong> Internet user connecting to, using the
          aforementioned application.
          <br />
          <strong>Services:</strong> refers to the operational functions made
          available to Users and/or a potential client under the contract.
          <br /> <strong>CGU:</strong> General Terms of Use.
        </p>
        <div className="title">Why are we processing your data?</div>
        <p>
          We process your personal data in order to facilitate your use of the
          InSkin application and all its features. More specifically, we use
          your data to:
          <br />
          <br />
          <ul>
            <li>Allow you to create a user account on InSkin;</li>
            <li>
              Create posts/stories on the dedicated page provided by InSkin;
            </li>
            <li>
              Add/follow your friends or share posts and recommendations with
              them on InSkin and on your social networks; Respond to your
              questions;
            </li>
            <li>
              Provide you with offers and inform you of news related to the
              InSkin application;
            </li>
            <li>Improve our service; Perform statistical analyses.</li>
          </ul>
        </p>
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
`;
