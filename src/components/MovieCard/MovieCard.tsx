import type { Movie } from "../../types/movie";
import css from "./MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750";

  return (
    <li className={css.card}>
      <img className={css.image} src={imageUrl} alt={movie.title} />

      <h3 className={css.title}>{movie.title}</h3>

      <p>⭐ {movie.vote_average.toFixed(1)}</p>
    </li>
  );
}
