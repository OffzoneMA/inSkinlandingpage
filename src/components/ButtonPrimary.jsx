import React from "react";
import styled from "styled-components";

export default function ButtonPrimary({ text, icon }) {
  return (
    <Wrapper>
      <a href="">{text}</a>
      {icon ? <img src={icon} alt="icon" /> : null}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background: var(--pink);
  padding: 0.625rem 1rem;
  text-transform: capitalize;
  cursor: pointer;
  a {
    color: var(--white);
  }
`;
