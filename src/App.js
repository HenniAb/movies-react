import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoris from "./pages/Favoris";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
