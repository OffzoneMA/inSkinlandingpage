import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ButtonPrimary({ text, icon, func }) {
  return (
    <Wrapper href="" onClick={() => func}>
      {text}
      {icon ? <img src={icon} alt="icon" /> : null}
    </Wrapper>
  );
}
const Wrapper = styled.a`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background: var(--pink);
  padding: 0.625rem 1rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.3s;

  color: var(--white);
  &:hover {
    background: var(--pink-dark);
  }
  @media (max-width: 768px) {
    padding: 0.5rem 0.76rem;
    font-size: 0.875rem;
  }
`;
