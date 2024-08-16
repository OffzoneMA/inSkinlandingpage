import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRef, useState } from "react";
export default function SubmitButton({ text, icon, func, data }) {
  const buttonRef = useRef(null);

  return (
    <Wrapper
      ref={buttonRef}
      href=""
      onClick={(e) => {
        e.preventDefault();
        setTimeout(() => {
          if (data.name && data.email && data.message && data.subject) {
            if (buttonRef.current) {
              buttonRef.current.style.backgroundColor = "#28B617";
              buttonRef.current.innerText = `${text[1]} `;
            }
          }
          console.log(data);
        }, 1000);
      }}
    >
      {text[0]}
      {icon ? <img src={icon} alt="icon" /> : null}
    </Wrapper>
  );
}
const Wrapper = styled.button`
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
  border: none;

  color: var(--white);
  &:hover {
    background: var(--pink-dark);
  }
  @media (max-width: 768px) {
    padding: 0.5rem 0.76rem;
    font-size: 0.875rem;
  }
`;
