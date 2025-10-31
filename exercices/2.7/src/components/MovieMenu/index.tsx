import type { Movie } from "../../types";

interface MovieMenuProps {
  movies: Movie[];
}

const MovieMenu = ({ movies }: MovieMenuProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Duration</th>
          <th>Image URL</th>
          <th>Description</th>
          <th>Budget</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td>{movie.duration}</td>
            <td>{movie.imageUrl || "/"}</td>
            <td>{movie.description || "/"}</td>
            <td>{movie.budget ? `${movie.budget}M$` : "/"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieMenu;
