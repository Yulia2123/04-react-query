import type { Movie } from "../../types/movie";
import css from "./MovieModal.module.css";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750";

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(event) => event.stopPropagation()}>
        <button
          className={css.closeButton}
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <img className={css.image} src={imageUrl} alt={movie.title} />

        <div className={css.content}>
          <h2 className={css.title}>{movie.title}</h2>

          <p className={css.text}>
            {movie.overview || "No description available."}
          </p>

          <p className={css.text}>
            <strong>Rating:</strong> {movie.vote_average.toFixed(1)}
          </p>

          <p className={css.text}>
            <strong>Release date:</strong> {movie.release_date || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
}
