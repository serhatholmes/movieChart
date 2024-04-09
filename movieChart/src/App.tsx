import { ChangeEvent, useState } from "react";
import { Card } from "./components/Card";
import "./designFiles/App.css";
import { useGetAllMoviesQuery } from "./slices/movieSlice";

function App() {
  const [nameQuery, setNameQuery] = useState("Pokémon");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: movies, isLoading } = useGetAllMoviesQuery({
    query: `&s=${nameQuery}&y=${year}&page=${currentPage}`,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameQuery(e.target.value);
  };

  const handleYearInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Pokémon.."
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
          /* onBlur={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}  This code can be used if you want to search when you click outside the search section, rather than every time you type a letter, and if you want fewer queries.*/
        />
        <input
          type="text"
          placeholder="Yıl..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleYearInputChange(e)
          }
        />
        <select onChange={(e) => setType(e.target.value)}>
          <option value="movie">Movies</option>
          <option value="series">Tv Series</option>
        </select>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="movie-grid">
          {movies?.Search &&
            movies.Search.map((movie: any, index: number) => (
              <Card key={index} movieD={movie} />
            ))}
        </div>
      )}
      <div className="pagination">
        <button
          className="pagination button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {movies &&
          movies.length > 0 &&
          [...Array(Math.ceil(movies.length / 10)).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => handlePageChange(number + 1)}
            >
              {number + 1}
            </button>
          ))}
        <button
          className="pagination button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            !movies ||
            movies.length === 0 ||
            currentPage === Math.ceil(movies.length / 10)
          }
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
