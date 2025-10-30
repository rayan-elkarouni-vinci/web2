import type { Movie } from "../../types";
import MovieItem from "../MovieItem";
import "./Cinema.css";

interface CinemaProps {
  name: string;
  movies: Movie[]; // un tableau de films
}

const Cinema = ({ name, movies }: CinemaProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie) => (
          <MovieItem key={movie.title} title={movie.title} director={movie.director} description={movie.description} />
        ))}
      </ul>
    </div>
  );
};

export default Cinema;
