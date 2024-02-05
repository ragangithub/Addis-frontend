import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { AlbumCard } from "../components/AlbumCard";
import { Statistics } from "../components/Statistics";

import {
  typography,
  space,
  color,
  position,
  top,
  zIndex,
  flexbox,
  layout,
} from "styled-system";

interface StyledDivProps {
  fontSize?: number;
  p?: number;
  backgroundColor?: string;
  position?: string;
  top?: number;
  zIndex?: number;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  padding?: number;
  gap?: number;
  margin?: number;
  width?: string;
  height?: string;
}

const Div = styled.div<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
  ${color}
`;

const CardContainer = styled.div<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
  ${color}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    color: black;
  }
`;

const H1 = styled.h1<StyledDivProps>`
  ${layout}
  ${typography}
  ${space}
  ${color}
`;
const AlbumsPage = () => {
  return (
    <>
      <Div padding={6} backgroundColor="rgb(249,250,251)">
        <H1 color="rgb(66,0,57)">Albums</H1>

        <CardContainer>
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </CardContainer>
      </Div>
      <Statistics />
    </>
  );
};

export default AlbumsPage;
