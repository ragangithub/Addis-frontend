import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Statistics } from "../components/Statistics";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getSongPending } from "../redux/songs/songSlice";

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
    </>
  );
};

export default Home;
