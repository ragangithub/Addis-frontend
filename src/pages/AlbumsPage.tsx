import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { AlbumCard } from "../components/AlbumCard";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { albumSelector } from "../redux/store";
import { getAlbumPending } from "../redux/albums/albumSlice";
import { Statistics } from "../components/Statistics";

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
`;

const H1 = styled.h1<StyledDivProps>`
  ${layout}
  ${typography}
  ${space}
  ${color}
`;
const AlbumsPage = () => {
  const { albums, isLoading } = useAppSelector(albumSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAlbumPending());
  }, [dispatch]);

  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <Div padding={6} backgroundColor="rgb(249,250,251)">
        <H1 color="rgb(66,0,57)">Albums</H1>

        <CardContainer>
          {albums.map((album, index) => (
            <AlbumCard key={index} album={album} />
          ))}
        </CardContainer>
      </Div>
      <Statistics />
    </>
  );
};

export default AlbumsPage;
