import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Card from "./../../components/card";
import css from "./../Home/Home.module.css";
import csss from "./Home.module.css";
import Search from "./../../components/Search/Search";

function Searched() {
  const [movie, setMovie] = useState([]);
  let params = useParams();

  const [count, setCount] = useState(1);
  // const length = movie.length;
  if (count > 500) {
    setCount(500);
  }
  if (count < 1) {
    setCount(1);
  }

  const getSearched = async (name) => {
    const data = await fetch(
      ` https://api.themoviedb.org/3/search/multi?api_key=729a4b9f9d981662d72f3372b90203a9&language=en-US&include_adult=true&append_to_response=adult,external_ids,combined_credits,videos,images,tagged_image&query=${params.inpot}&page=${count}`
    );
    const recipes = await data.json();
    setMovie(recipes.results);
  };
  useEffect(() => {
    getSearched();
  }, [count]);
  console.log(movie);
  // console.log(length);
  // console.log(count);
  const inpot = params.inpot;
  console.log("inpot=" + inpot);
  if (movie.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no data</h2>
          <button onClick={() => setCount(0)}>previous page</button>
        </div>
      </main>
    );
  }
  return (
    <>
      <Helmet>
        <title>{"Search - app"}</title>
      </Helmet>
      <Search inpot={inpot} />

      <div className={css.container}>
        {movie.map((item) => (
          <Card
            id={item.media_type + "/" + item.id}
            title={item.title || item.name}
            type={item.media_type}
            adult={item.adult}
            img={item.poster_path || item.profile_path}
            // profile_path={item.profile_path}
            vote={item.vote_average}
            key={item.id}
          />
        ))}
      </div>
      <div className={csss.but}>
        <button onClick={() => setCount(count - 1)}>previous page</button>
        <button onClick={() => setCount(count + 1)}>naxt page </button>
      </div>
    </>
  );
}

export default Searched;
