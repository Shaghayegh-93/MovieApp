import MovieCard from "../movieCard/MovieCard";
import styles from "./movieList.module.css";

const MovieList = ({ movieData }) => {
  return (
    <div className={styles.container}>
      {movieData.length === 0 ? (
        <p>not found</p>
      ) : (
        movieData.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })
      )}
    </div>
  );
};

export default MovieList;
