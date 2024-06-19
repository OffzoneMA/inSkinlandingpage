import React from "react";
import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";
import Logo from "./Logo";
export default function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <img src="../image/cosmetic1.svg" alt="" className="pic pic1" />
        <img src="../image/cosmetic2.svg" alt="" className="pic pic2" />
        <img src="../image/cosmetic3.svg" alt="" className="pic pic3" />
        <div className="row">
          <h1>
            As a leader in innovation in the cosmetic industry, InSkin is
            committed to providing an exceptional, safe, and effective user
            experience.
          </h1>
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
              <div className="question">How can we help you?</div>
              <div className="inputs">
                <input
                  type="text"
                  className="name"
                  placeholder="Enter Full Name"
                />
                <input
                  type="email"
                  className="email"
                  placeholder="Enter your email"
                />
                <input type="text" className="subject" placeholder="Subject" />
                <textarea
                  className="message"
                  placeholder="Write Your Message"
                />
              </div>
            </div>
            <div className="btn">
              <ButtonPrimary
                text={"send message"}
                icon={"../image/arrow-right.svg"}
              />
            </div>
            <div className="separator"></div>
            <div className="infos">
              <div className="logo">
                <Logo />
              </div>
              <div className="items">
                <div className="info">
                  <h4>Project</h4>
                  <a href="#">team</a>
                  <a href="#">independence</a>
                </div>
                <div className="info">
                  <h4>Application</h4>
                  <a href="#">Features</a>
                  <a href="#">Premium version</a>
                  <a href="#">Questions ?</a>
                </div>
                <div className="info">
                  <h4>Useful links</h4>
                  <a href="#">Contact us</a>
                  <a href="#">Press</a>
                  <a href="#">Legal notice</a>
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
          <div className="copyright">
            <p>© {new Date().getFullYear()} InSkin - All rights reserved</p> |{" "}
            <a href="privacy-policy">Privacy Policy</a> |{" "}
            <a href="terms-of-use"> Terms of Use </a> |{" "}
            <a href="legal-notice"> Legal Notice </a>
          </div>
          <div className="social-links">
            <a href="">
              <img src="../image/Frame24.svg" alt="" />
            </a>
            <a href="">
              <img src="../image/Frame25.svg" alt="" />
            </a>
            <a href="">
              <img src="../image/Frame26.svg" alt="" />
            </a>
            <a href="">
              <img src="../image/Frame27.svg" alt="" />
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
      right: 18rem;
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
        }
      }
      .separator {
        height: 0.125rem;
        opacity: 0.5;
        background: var(--pink-light);
      }
      .infos {
        display: flex;
        justify-content: space-around;
        .info {
          display: flex;
          flex-direction: column;
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
        .img > img {
          display: none;
        }
        h1 {
          text-align: center;
        }
      }
      .pic1 {
        left: 19rem;
        top: -3rem;
      }
      .pic2 {
        left: -11rem;
        top: 17rem;
      }
      .pic3 {
        top: -11rem;
        right: 18rem;
      }
      .contact {
        .form {
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
          color: #000;
          text-align: center;
          font-family: var(--ff-primary);
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 82%;
          display: inline-block;
        }
      }
      .social-links {
        display: flex;
        gap: 1rem;
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
`;
