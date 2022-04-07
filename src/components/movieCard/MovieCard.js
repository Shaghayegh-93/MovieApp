import styles from "./movieCard.module.css";
const MovieCard = ({ movie }) => {
  const MOVIE_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={styles.container}>
      <img
        className={styles.movieImg}
        src={MOVIE_PATH + movie.backdrop_path}
        alt="moviePoster"
      ></img>

      <div className={styles.movieDetail}>
        <div className={styles.movieInfo}>
          <h4 className={styles.movieTitle}>{movie.title}</h4>
          <p className={styles.movieRating}>{movie.vote_average}</p>
        </div>
        <div className={styles.movieOverview}>
          <h1>overview</h1>
          {movie.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
