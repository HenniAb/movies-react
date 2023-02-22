import React from "react";
import Movies from "../components/Movies";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Movies />
    </div>
  );
};

export default Home;
