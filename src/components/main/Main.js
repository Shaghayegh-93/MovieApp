import styles from "./main.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MovieList from "../movieList/MovieList";
import { useEffect, useState } from "react";
import axios from "axios";
let API_KEY = "&api_key=89f29f4b89e8c70ffb779946b078ce72";
let BASE_URL = "https://api.themoviedb.org/3";
let URL = BASE_URL + "/discover/movie?sort_by=popularity.desc" + API_KEY;
const navItem = ["Popular", "Kids", "Theatre", "Drama", "Comedie"];
const Main = () => {
  const [movieData, setMovieData] = useState([]);
  const [selectUrl, setSelectUrl] = useState(URL);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get(selectUrl);

        setMovieData(data.results);
      } catch (error) {}
    };
    getMovies();
  }, [selectUrl]);
  const getMovieData = (movieType) => {
    if (movieType === "Popular") {
      URL = BASE_URL + "/discover/movie?sort_by=popularity.desc" + API_KEY;
    }
    if (movieType === "Theatre") {
      URL =
        BASE_URL +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_KEY;
    }
    if (movieType === "Kids") {
      URL =
        BASE_URL +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_KEY;
    }
    if (movieType === "Drama") {
      URL =
        BASE_URL +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_KEY;
    }
    if (movieType === "Comedie") {
      URL =
        BASE_URL +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_KEY;
    }
    setSelectUrl(URL);
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const searchMovie = (e) => {
    if (e.key === "Enter") {
      URL =
        BASE_URL +
        "/search/movie?api_key=89f29f4b89e8c70ffb779946b078ce72&query=" +
        search;
      setSelectUrl(URL);
      setSearch("");
    }
  };
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navContainer}>
        <ul className={styles.navWrapper}>
          <div className={styles.leftSide}>
            
            <ul>
              {navItem.map((item) => {
                return (
                  <li key={item}>
                    <a
                      name={item}
                      href="#"
                      onClick={(e) => getMovieData(e.target.name)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.searchBox}>

            <SearchOutlinedIcon />
            <input
              type="text"
              placeholder="Enter Movie Name"
              className={styles.searchInput}
              value={search}
              onChange={changeHandler}
              onKeyDown={searchMovie}
            ></input>
            </div>
          </div>
        </ul>
      </nav>

      <div className={styles.mainContainer}>
        <MovieList movieData={movieData} />
      </div>
    </div>
  );
};

export default Main;
