import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

import Card from "./../../components/card";
import PersonCard from "./../../components/PersonCard/PersonCard";
import Search from "./../../components/Search/Search";
import Slader from "./../../components/Slader/Slader";
import Divv from "./../../components/Divv/Divv";
import css from "./Home.module.css";
const img2 = "https://image.tmdb.org/t/p/w500/";

function Home() {
  let Params = useParams();

  const [movies, setMovies] = useState([]);
  const [person, setPerson] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [pop, setPop] = useState("movie");
  const [time, setTime] = useState("day");

  if (count > 500) {
    setCount(500);
  }
  if (count < 1) {
    setCount(1);
  }
  // https://api.themoviedb.org/3/person/popular?api_key=729a4b9f9d981662d72f3372b90203a9&language=en-US&page=1
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${pop}/popular?api_key=729a4b9f9d981662d72f3372b90203a9&include_adult&page=${count}`
      );
      const data = await response.json();
      setLoading(false);
      console.log(data);
      setMovies(data.results);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const getPerson = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=729a4b9f9d981662d72f3372b90203a9&include_adult&page=${count}`
      );
      const data = await response.json();
      setLoading(false);
      console.log(data);
      setPerson(data.results);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const getTrending = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/${time}?api_key=729a4b9f9d981662d72f3372b90203a9&page=${count}`
      );
      const data = await response.json();
      setLoading(false);
      console.log(data);
      setTrending(data.results);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(movies);
    getPerson(person);
    getTrending(trending);
  }, [pop, time]);
  console.log(movies);
  console.log(count);
  console.log(trending);
  console.log(trending);
  console.log(trending);
  console.log(trending);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  const number = Math.floor(Math.random() * 12) + 1;
  console.log(number);
  return (
    <>
      <div className={css.container}>
        {/* <div className={css.ww}>
          <Slader data={movies} />
        </div> */}
        <div className={css.ss}>
          {/* {trending.map((item, index) => {
            if (index == number)
              return (
                <Card
                  id={"movie" + "/" + item.id}
                  title={item.title || item.name}
                  img={item.backdrop_path}
                  vote={item.vote_average}
                  video={item.video}
                  key={item.id}
                />
              );
          })} */}
          <div className={css.but}>
            <h1>Popular</h1>
            <button onClick={() => setPop("movie")}>MOVIE</button>
            <button onClick={() => setPop("tv")}>TV SHOWS</button>
          </div>

          <div className={css.popular}>
            {movies.map((item, index) => {
              if (index < 12)
                return (
                  <Card
                    id={"movie" + "/" + item.id}
                    title={item.title}
                    img={item.poster_path}
                    vote={item.vote_average}
                    video={item.video}
                    key={item.id}
                  />
                );
            })}
          </div>
          <div className={css.but}>
            <h1>Trending</h1>
            <button onClick={() => setTime("day")}>day</button>
            <button onClick={() => setTime("week")}>week</button>
          </div>
          <div className={css.popular}>
            {trending.map((item, index) => {
              if (index < 12)
                return (
                  <Card
                    id={item.media_type + "/" + item.id}
                    title={item.title || item.name}
                    img={item.poster_path}
                    vote={item.vote_average}
                    video={item.video}
                    key={item.id}
                  />
                );
            })}
          </div>
        </div>
        {/* <div className={css.people}>
          <a href="/persons">
            <h1>persons</h1>
          </a>
          {person.map((item, index) => {
            if (index < 12)
              return (
                <PersonCard
                  id={"person" + "/" + item.id}
                  name={item.name}
                  img={item.profile_path}
                  character={item.known_for}
                  video={item.video}
                  key={item.id}
                />
              );
          })}
        </div> */}
      </div>
    </>
  );
}

export default Home;
