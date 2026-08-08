import { useEffect } from "react";
import { createPortal } from "react-dom";

import type { Movie } from "../../types/movie";

import css from "./MovieModal.module.css";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "https://via.placeholder.com/1280x720";

  return createPortal(
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
    </div>,
    document.body
  );
}
