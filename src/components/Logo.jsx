import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Wrapper onClick={goHome}>
      <div className="container">
        <img src="../image/subtract1.svg" alt="" />
        <img src="../image/subtract2.svg" alt="" />
        <img src="../image/subtract3.svg" alt="" />
        <img src="../image/subtract4.svg" alt="" />
        <img src="../image/subtract5.svg" alt="" />
        <img src="../image/subtract6.svg" alt="" />
      </div>
      <p>Unveil the elegance</p>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }
  p {
    color: #333;
    width: fit-content;
    font-family: var(--ff-secondary);
    font-size: 0.7rem;
    font-weight: 600;
    line-height: normal;
  }
`;
