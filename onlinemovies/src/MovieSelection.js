import { useNavigate } from "react-router-dom";
import "./styles.css";
import movies from "./MoviesData";

const MovieSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (movieId) => {
    navigate(`/seats/${movieId}`);
  };

  return (
    <div className="container">
      <h2>Select a Movie</h2>
      <div className="grid">
        {movies.map((movie) => (
          <button
            key={movie.id}
            className="movie-btn"
            onClick={() => handleSelect(movie.id)}
          >
            <img src={movie.img} alt={movie.name} />
            <p>{movie.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieSelection;
