import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

import Card from "./../../components/card";
import Search from "./../../components/Search/Search";
import css from "../Home/Home.module.css";
const img2 = "https://image.tmdb.org/t/p/w500/";

function Home() {
  let Params = useParams();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [media, setMedia] = useState("movie");

  if (count > 500) {
    setCount(500);
  }
  if (count < 1) {
    setCount(1);
  }
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${media}/top_rated?api_key=729a4b9f9d981662d72f3372b90203a9&language=en-US&include_adult=true&append_to_response=adult,external_ids,combined_credits,videos,images,tagged_image&page=${count}`
      );
      const data = await response.json();
      setLoading(false);
      setMovies(data.results);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(movies);
  }, [count, media]);
  console.log(movies);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <Search />

      {/* <div className={css.header}></div> */}

      <div className={css.but}>
        <button onClick={() => setMedia("tv")}>tv</button>
        <button onClick={() => setMedia("movie")}>movie </button>
      </div>
      <div className={css.container}>
        {movies.map((item) => (
          <Card
            id={media + "/" + item.id}
            title={item.title}
            img={item.poster_path}
            vote={item.vote_average}
            key={item.id}
          />
        ))}
      </div>
      <div className={css.but}>
        <button onClick={() => setCount(count - 1)}>previous page</button>
        <button onClick={() => setCount(count + 100)}>naxt page </button>
      </div>
    </>
  );
}

export default Home;
