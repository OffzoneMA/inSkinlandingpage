import React from "react";
import styled from "styled-components";
import { RattingComment } from "../components";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Community() {
  return (
    <Wrapper>
      <div className="container">
        <div className="column">
          <h1 className="title">Join a community of +2 million users</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu
          </p>
          <div className="links">
            <a href="/">
              <img src="../image/app_store_en.svg" alt="" />
            </a>
            <a href="/">
              <img src="../image/google_play_en.svg" alt="" />
            </a>
          </div>
          <div className="stars">
            <img src="../image/whiteStar.svg" alt="" />
            <img src="../image/whiteStar.svg" alt="" />
            <img src="../image/whiteStar.svg" alt="" />
            <img src="../image/whiteStar.svg" alt="" />
            <img src="../image/whiteStar.svg" alt="" />
            <small>
              <span>4,7/5 </span> ● <span>300,000 reviews</span>
            </small>
          </div>
          <div className="comments">
            <Swiper
              className="comments"
              slidesPerView={3}
              spaceBetween={30}
              // centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
            >
              <SwiperSlide>
                <RattingComment
                  name={"Jane Cooper"}
                  starsNum={5}
                  img={"../image/profile1.svg"}
                  comment={
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <RattingComment
                  name={"Cameron Williamson"}
                  starsNum={5}
                  img={"../image/profile2.svg"}
                  comment={
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <RattingComment
                  name={"Jenny Wilson"}
                  starsNum={5}
                  img={"../image/profile3.svg"}
                  comment={
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <RattingComment
                  name={"Jane Cooper"}
                  starsNum={5}
                  img={"../image/profile1.svg"}
                  comment={
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <RattingComment
                  name={"Cameron Williamson"}
                  starsNum={5}
                  img={"../image/profile2.svg"}
                  comment={
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <RattingComment
                  name={"Jenny Wilson"}
                  starsNum={5}
                  img={"../image/profile3.svg"}
                  comment={
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <img src="../image/profile4.svg" alt="" className="pic4" />
        <img src="../image/profile5.svg" alt="" className="pic5" />
        <img src="../image/profile6.svg" alt="" className="pic6" />
        <img src="../image/profile7.svg" alt="" className="pic7" />
        <img src="../image/profile8.svg" alt="" className="pic8" />
        <img src="../image/profile9.svg" alt="" className="pic9" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  height: 100vh;
  max-height: var(--max-height);
  min-height: 500px;
  margin: 0 auto;
  display: block;
  padding: 1.8rem 5rem;
  background: var(--purple-light);
  position: relative;
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    .title {
      color: var(--white);
      font-family: Inter;
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: -0.075rem;
    }
    p {
      color: var(--white);
      text-align: center;
      font-family: "DM Sans";
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.6875rem;
    }
    .column {
      display: flex;
      padding-bottom: 1rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3.25rem;
    }
    small {
      display: block;
      color: var(--white);
      font-family: "DM Sans";
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      text-align: center;
    }
    .stars {
      text-align: center;
    }
    .links {
      display: flex;
      gap: 2rem;
      img {
        background: var(--dark);
        border-radius: 0.5rem;
      }
    }
    .comments {
      display: flex;
      align-items: flex-start;
      gap: 2.5rem;
      align-self: stretch;
      position: relative;
    }
    > img {
      position: absolute;
    }
    .pic4 {
      top: 18rem;
      left: 6rem;
    }

    .pic5 {
      top: 9rem;
      left: 2rem;
    }

    .pic6 {
      top: 2rem;
      left: 10rem;
    }

    .pic7 {
      top: 18rem;
      right: 2rem;
    }

    .pic8 {
      top: 11rem;
      right: 10rem;
    }

    .pic9 {
      top: 3rem;
      right: 4rem;
    }
    h1,
    p {
      z-index: 999;
    }
  }
`;
