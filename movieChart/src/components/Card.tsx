import { useNavigate } from "react-router-dom";
import { useGetMovieDetailQuery } from "../slices/movieSlice";
import "../designFiles/Card.css";
import { useEffect, useState } from "react";

interface CardProps {
  movieD: any;
}

export const Card = ({ movieD }: CardProps) => {
  const [id, setId] = useState("");
  const { data: movie, isLoading } = useGetMovieDetailQuery(`i=${id}`);

  const navigate = useNavigate();
  console.log("movie", movie);
  console.log("movieD", movieD.imdbID);
  const handleClick = () => {
    navigate(`/movieDetail/${movieD.imdbID}`);
    setId(movieD.imdbID);
  };

  useEffect(() => {
    setId(movieD.imdbID);
  }, [movieD.imdbID]);

  return (
    <div
      className="movie-card"
      onClick={handleClick}
      style={{
        backgroundImage: `url(${movieD.Poster})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="image-container" onClick={() => {}}></div>
      <div className="movie-info">
        <p className="movie-name">{movieD.Title}</p>
        <p className="movie-name">{movieD.Year}</p>
      </div>
    </div>
  );
};
