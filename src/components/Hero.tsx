///** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { jsx, css } from "@emotion/react";

import styled from "@emotion/styled";

import {
  typography,
  space,
  color,
  flexbox,
  layout,
  backgroundImage,
  backgroundSize,
} from "styled-system";

interface StyledDivProps {
  fontSize?: number;
  p?: number;
  backgroundColor?: string;
  position?: string;
  top?: number;
  zIndex?: number;
  display?: string;
  justifyContent?: string;
  padding?: number;
  gap?: number;
  margin?: number;
  width?: string;
  height?: string;
  bg?: string;
  bgSize?: string;
  alignItems?: string;
  textAlign?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}

const Div = styled.div<StyledDivProps>`
  ${flexbox}
  ${backgroundImage}
  ${backgroundSize}
  ${layout}
  ${typography}
  ${space}
  ${color}
`;

const H1 = styled.h1<StyledDivProps>`
  ${layout}
  ${typography}
  ${space}
  ${color}
`;

const P = styled.p<StyledDivProps>`
  ${layout}
  ${typography}
  ${space}
  ${color}
`;

export const Hero = () => {
  return (
    <Div
      width="100%"
      height="100vh"
      backgroundImage={`url("https://media.istockphoto.com/id/1076840920/vector/music-background.jpg?s=612x612&w=0&k=20&c=bMG2SEUYaurIHAjtRbw7bmjLsXyT7iJUvAM5HjL3G3I=")`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Div textAlign="center" color="white" width="50%">
        <H1 fontSize={50}>The Best of the Best!</H1>

        <P textAlign="center" fontSize={20}>
          Curated Music Collections: A carefully selected assortment of timeless
          classics, chart-topping hits, and hidden gems, tailored to provide the
          ultimate listening pleasure for music enthusiasts.
        </P>
      </Div>
    </Div>
  );
};
