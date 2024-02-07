///** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { statisticsSelector } from "../redux/store";
import { getStatisticsPending } from "../redux/statistics/statisticSlice";
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
}

const Div = styled.div<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
  ${color}
`;

const Span = styled.span<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
  ${color}
`;

export const Statistics = () => {
  const { statistics, isLoading } = useAppSelector(statisticsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStatisticsPending());
  }, [dispatch]);

  if (isLoading) return <div>loading...</div>;
  return (
    <Div display="flex" justifyContent="space-around" padding={4}>
      <Div display="flex" flexDirection="column" color="#420039">
        <Span color="rgb(66,0,57)" fontSize={50}>
          {statistics[statistics.length - 1]?.totalSongs}
        </Span>

        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Songs
        </p>
      </Div>

      <Div className="flex flex-col items-center text-mainColor">
        <Span color="rgb(66,0,57)" fontSize={50}>
          {statistics[statistics.length - 1]?.totalArtists}
        </Span>
        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Artists
        </p>
      </Div>

      <Div className="flex flex-col items-cente text-mainColor">
        <Span color="rgb(66,0,57)" fontSize={50}>
          {statistics[statistics.length - 1]?.totalGenres}
        </Span>
        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Genres
        </p>
      </Div>
      <Div className="flex flex-col items-center text-mainColor">
        <Span color="rgb(66,0,57)" fontSize={50}>
          {statistics[statistics.length - 1]?.totalAlbums}
        </Span>
        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Albums
        </p>
      </Div>
    </Div>
  );
};
