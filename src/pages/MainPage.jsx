import React from "react";
import { Footer, Hero } from "../components";
import { Community, Faq, Section1, Section2, Section3 } from "../Section";
import styled from "styled-components";
export default function mainPage() {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Community />
      <Faq />
      {/* <Footer /> */}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
