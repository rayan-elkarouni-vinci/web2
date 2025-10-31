import { useState, type SyntheticEvent } from "react";
import MovieMenu from "../MovieMenu";
import type { Movie } from "../../types";

const defaultMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    imageUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300",
    description: "A thief who enters dreams to steal secrets",
    budget: 160,
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Wachowski Sisters",
    duration: 136,
    budget: 63,
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    description: "A team of explorers travel through a wormhole in space",
    budget: 165,
  },
  {
    id: 4,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    budget: 11,
  },
  {
    id: 5,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: 152
  },
];

const nextMovieId = (movies: Movie[]) => {
  return movies.reduce((maxId, movie) => Math.max(maxId, movie.id), 0) + 1;
};

function App() {
  const [movies, setMovies] = useState(defaultMovies);

  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const newMovie: Movie = {
      id: nextMovieId(movies),
      title,
      director,
      duration: parseInt(duration),
      imageUrl: imageUrl || undefined,
      description: description || undefined,
      budget: budget ? parseFloat(budget) : undefined,
    };

    setMovies([...movies, newMovie]);

    // Réinitialiser le formulaire
    setTitle("");
    setDirector("");
    setDuration("");
    setImageUrl("");
    setDescription("");
    setBudget("");
  };

  return (
    <div>
      <h1>Mes Films Préférés</h1>
      <MovieMenu movies={movies} />
      <h2>Add a Movie</h2>
      <div>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="director">Director *</label>
          <input
            id="director"
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="duration">Duration (minutes) *</label>
          <input
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="budget">Budget (millions $)</label>
          <input
            id="budget"
            type="number"
            step="0.1"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <button type="submit">Add Movie</button>
      </form>
      </div>
    </div>
  );
}

export default App;
