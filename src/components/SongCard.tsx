///** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { jsx, css } from "@emotion/react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import { typography, space, color, flexbox, layout } from "styled-system";

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

  width?: number;
  marginTop?: number;
  textAlign?: string;
}

const Div = styled.div<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
  ${color}
  width: ${({ width }) => width || "auto"};

  margin-top: ${({ marginTop }) => marginTop || 0};
  border: 2px solid blue;

  &:hover {
    cursor: pointer;
  }
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

interface SongCardProps {
  song: {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  };
}

export const SongCard = ({ song }: SongCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/details/${song?._id}`);
  };
  return (
    <Div
      backgroundColor="#F8F4F0"
      width={300}
      marginTop={36}
      padding={3}
      onClick={handleCardClick}
    >
      <H1 fontSize={23} textAlign="center">
        {song?.title}
      </H1>
      <P fontSize={15}>Artist: {song?.artist}</P>
      <P fontSize={15}>Album: {song?.album}</P>
      <P fontSize={15}>Genre: {song?.genre}</P>
    </Div>
  );
};
