/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx, css } from "@emotion/react";
// import { typography, space, color } from "styled-system";
import styled from "@emotion/styled";
import { typography, space, color, position, top, zIndex } from "styled-system";
import { Hero } from "../components/Hero";

interface StyledDivProps {
  fontSize?: number;
  p?: number;
  backgroundColor?: string;
  position?: string;
  top?: number;
  zIndex?: number;
}

const StyledDiv = styled.div<StyledDivProps>`
  ${typography}
  ${space}
  ${color}
  @media (max-width: 768px) {
    font-size: 14px;
    color: black;
  }
`;

const Wrapper = styled.div<StyledDivProps>`
  ${position}
  ${top}
  ${zIndex}
`;

const Home = () => {
  return (
    <>
      {/* <Wrapper position="sticky" zIndex={30}>
        <StyledDiv color="red" fontSize={3} p={3} backgroundColor="tomato">
          Home 1
        </StyledDiv>
      </Wrapper> */}
      <Hero />
    </>
  );
};

export default Home;
