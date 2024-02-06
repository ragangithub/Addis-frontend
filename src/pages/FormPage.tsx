import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { postSongPending } from "../redux/songs/songSlice";
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
interface FormValues {
  artist: string;
  title: string;
  album: string;
  genre: string;
}

const FormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formValues, setFormValues] = useState<FormValues>({
    artist: "",
    title: "",
    album: "",
    genre: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const { artist, title, album, genre } = formValues;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(postSongPending(formValues));

    setFormValues({
      title: "",
      artist: "",
      album: "",
      genre: "",
    });
    navigate("/songs");
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
              name="artist"
              value={artist}
              onChange={handleInputChange}
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
              name="title"
              value={title}
              onChange={handleInputChange}
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
              name="album"
              value={album}
              onChange={handleInputChange}
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
              name="genre"
              value={genre}
              onChange={handleInputChange}
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
