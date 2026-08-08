import type { FormEvent } from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const input = form.elements.namedItem("query") as HTMLInputElement;

    const value = input.value.trim();

    if (!value) {
      return;
    }

    onSubmit(value);

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        name="query"
        type="text"
        placeholder="Search movies..."
      />

      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
}
