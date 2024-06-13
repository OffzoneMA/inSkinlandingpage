import React from "react";
import styled from "styled-components";

export default function ButtonPrimary({ text }) {
  return (
    <Wrapper>
      <a href="">{text}</a>
    </Wrapper>
  );
}
const Wrapper = styled.a`
  a {
    border-radius: 0.5rem;
    background: var(--EA6479, #ea6479);
    padding: 0.625rem 1rem;
    text-transform: capitalize;
    color: var(--white);
  }
`;
