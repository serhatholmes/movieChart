import { useParams } from "react-router-dom";
import "../designFiles/MovieDetail.css";

export const MovieDetail = () => {
  const { movieId } = useParams();

  return (
    <div
      style={{
        /*  backgroundImage: `url(${movieId.Poster})`, */
        backgroundRepeat: "no-repeat",
      }}
      className="container"
    >
      <h2>Movie Detail</h2>
      <p>Movie ID: {movieId}</p>
      <p>Movie Name: {}</p>
    </div>
  );
};
