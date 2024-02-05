import React, { useState, ChangeEvent, FormEvent } from "react";
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
  alignItems?: string;
  padding?: number;
  gap?: number;
  margin?: number;
  width?: number;
  height?: string;
  marginTop?: number;
}

const Div = styled.div<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
  ${color}
`;

const FormContainer = styled.div<StyledDivProps>`
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
  ${color}
  border: 2px solid brown;
  width: ${({ width }) => width || "auto"};
  margin-top: ${({ marginTop }) => marginTop || 0};
`;
const H1 = styled.h1<StyledDivProps>`
  ${layout}
  ${typography}
    ${space}
    ${color}
`;

const Button = styled.button<StyledDivProps>`
  ${layout}
  ${typography}
    ${space}
    ${color}

    &:hover {
    cursor: pointer;
  }
`;

const FormPage = () => {
  const [artist, setArtist] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const handleGenreChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  };

  const handleArtistChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArtist(e.target.value);
  };
  const handleAlbumChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlbum(e.target.value);
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Artist:", artist);
    console.log("Title:", title);

    setArtist("");
    setTitle("");
    setAlbum("");
    setGenre("");
  };
  return (
    <Div padding={6} display="flex" justifyContent="center" alignItems="center">
      <FormContainer padding={3} width={400} backgroundColor="#f5f5f5">
        <H1>Add Song</H1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="artist">Artist:</label>
            <input
              type="text"
              id="artist"
              value={artist}
              onChange={handleArtistChange}
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "90%",
                fontSize: "16px",
              }}
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "90%",
                fontSize: "16px",
              }}
            />
          </div>
          <div>
            <label htmlFor="album">Album:</label>
            <input
              type="text"
              id="album"
              value={album}
              onChange={handleAlbumChange}
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "90%",
                fontSize: "16px",
              }}
            />
          </div>
          <div>
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              value={genre}
              onChange={handleGenreChange}
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "90%",
                fontSize: "16px",
              }}
            />
          </div>

          <Button
            backgroundColor="rgb(93,92,222)"
            padding={2}
            marginTop={20}
            color="white"
          >
            Add Song
          </Button>
        </form>
      </FormContainer>
    </Div>
  );
};

export default FormPage;
