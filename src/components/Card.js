import React, { useState } from "react";

const Card = ({ movie }) => {
  const [favoris, setFavoris] = useState([]);

  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };
  const favorisList = () => {
    let storeData = window.localStorage.movies;
  };
  favorisList();

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={"Affiche " + movie.title}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Sorti le: {dateFormater(movie.release_date)}</h5>
      ) : null}

      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>
      <ul>{movie.genre_ids ? genreFinder(movie.genre_ids) : null}</ul>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p>
      <div className="btn" onClick={() => setFavoris([...favoris, movie.id])}>
        Ajouter aux coups de coeur
      </div>
    </div>
  );
};

export default Card;
