import React from "react";
import styled from "styled-components";
export default function RattingComment({ name, starsNum, comment, img }) {
  return (
    <Wrapper>
      <div className="container">
        <div className="profile">
          <img src={img} alt="" />
          <div className="item">
            <h5>{name}</h5>
            <div className="stars">
              {Array(starsNum)
                .fill()
                .map((_, index) => {
                  return <img src="../image/star.svg" alt="" key={index} />;
                })}
            </div>
          </div>
        </div>
        <p className="comment">{comment}</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .container {
    border-radius: 0.75rem;
    background: #fff;
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    flex: 1 0 0;
    .profile {
      display: flex;
      gap: 0.75rem;
    }
    .stars {
      display: flex;
      gap: 0.2rem;
    }
    .comment {
      color: #202020;
      font-family: var(--ff-primary) !important;
      text-align: left;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }
`;
