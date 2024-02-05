///** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { jsx, css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
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
}

const Div = styled.div<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
  ${color}

  @media (max-width: 768px) {
    font-size: 14px;
    color: black;
  }
`;

const Span = styled.span<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
  ${color}

  @media (max-width: 768px) {
    font-size: 14px;
    color: black;
  }
`;

export const Statistics = () => {
  return (
    <Div display="flex" justifyContent="space-around" padding={4}>
      <Div display="flex" flexDirection="column" color="#420039">
        <Span color="rgb(66,0,57)" fontSize={40}>
          10+
        </Span>

        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Songs
        </p>
      </Div>

      <Div className="flex flex-col items-center text-mainColor">
        <Span color="rgb(66,0,57)" fontSize={40}>
          10
        </Span>
        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Artists
        </p>
      </Div>
      <Div className="flex flex-col items-center text-mainColor">
        <Span color="rgb(66,0,57)" fontSize={40}>
          10+
        </Span>
        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Albums
        </p>
      </Div>
      <Div className="flex flex-col items-cente text-mainColor">
        <Span color="rgb(66,0,57)" fontSize={40}>
          10
        </Span>
        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Genres
        </p>
      </Div>
    </Div>
  );
};
