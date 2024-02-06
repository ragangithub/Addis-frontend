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
  justifyContent?: string;
  padding?: number;
  gap?: number;
  margin?: number;
}

const Nav = styled.nav<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${position}
  ${top}
  ${zIndex}
  ${color}
  ${space}
`;

const BrandName = styled.span<StyledDivProps>`
  ${typography}
  ${color}
`;

const Div = styled.div<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
  ${color}
`;

interface Link {
  path: string;
  label: string;
}

const links: Link[] = [
  { path: "/", label: "Home" },
  { path: "/songs", label: "Songs" },
  { path: "/albums", label: "Albums" },
];

export const Navbar = () => {
  return (
    <>
      <Nav
        position="sticky"
        top={0}
        zIndex={30}
        display="flex"
        justifyContent="space-between"
        padding={4}
        backgroundColor="white"
      >
        <BrandName fontSize={4} color="rgb(66,0,57)">
          Addis Songs
        </BrandName>
        <Div
          fontSize={2}
          color="rgb(66,0,57)"
          display="flex"
          justifyContent="space-between"
        >
          {links.map((link) => (
            <Div key={link.label} margin={2} color="red">
              <NavLink
                to={link.path}
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  color: "black",
                })}
              >
                {link.label}
              </NavLink>
            </Div>
          ))}
        </Div>
      </Nav>
    </>
  );
};
