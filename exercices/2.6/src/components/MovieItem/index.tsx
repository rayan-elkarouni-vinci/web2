import "./MovieItem.css";
import { useState } from "react";

interface MovieItemProps {
  title: string;
  director: string;
  description: string;
}

const MovieItem = ({ title, director, description }: MovieItemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <li onClick={() => setShowDescription(!showDescription)}>
      <strong>{title}</strong> - Réalisateur : {director}
      {showDescription && <p>{description}</p>}
    </li>
  );
};

export default MovieItem;
