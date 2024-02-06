import React from "react";
import { Routes, Route } from "react-router-dom";

import { SongsPage, AlbumsPage, GenrePage, Home, Form, Details } from "./pages";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/genre" element={<GenrePage />} />
      </Routes>
    </>
  );
}

export default App;
