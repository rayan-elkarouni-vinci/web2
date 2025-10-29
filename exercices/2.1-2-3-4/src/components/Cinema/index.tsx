import "./Cinema.css";

interface CinemaProps {
  name: string;
  movies: Movie[]; // un tableau de films
}

interface Movie {
  title: string;
  director: string;
}

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.movies.map((movie) => (
          <li key={movie.title}>
            <strong>{movie.title}</strong> - Réalisateur : {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cinema;
