import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import Logo from "./Logo";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Wrapper>
      <Logo />
      <div className="links">
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Careers</a>
        <a href="/">Help</a>
      </div>
      <ButtonPrimary text={"get started now"} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 0 2rem;
  max-width: 1480px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  .links {
    display: flex;
    gap: 1.7rem;
    a {
      color: var(--blue-dark);
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    gap: 0rem;
    .links {
      display: none;
    }
  }
`;
