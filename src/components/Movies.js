import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Movies = () => {
  const [data, setData] = useState([]);
  const [researchValue, setResearcValue] = useState("film");
  const [topFlop, SetTopFlop] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=" +
          researchValue +
          "&language=fr-FR"
      )
      .then((res) => setData(res.data.results));
  }, [researchValue]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entez le titre d'un film"
            id="search-input"
            onChange={(e) => setResearcValue(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => SetTopFlop("goodToBad")}
          >
            Top <span> → </span>
          </div>

          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => SetTopFlop("badToGood")}
          >
            Flop <span> → </span>
          </div>
        </div>
      </div>

      <div className="result">
        {data
          .slice(0, 12)
          .sort((a, b) => {
            if (topFlop === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (topFlop === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Movies;
