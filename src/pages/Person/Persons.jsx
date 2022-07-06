import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

import Card from "./../../components/card";
import Person from "./../../components/Person/Person";
import Search from "./../../components/Search/Search";
import Divv from "./../../components/Divv/Divv";
import css from "./persons.module.css";
const img2 = "https://image.tmdb.org/t/p/w500/";

function Home() {
  let Params = useParams();

  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  if (count > 500) {
    setCount(500);
  }
  if (count < 1) {
    setCount(1);
  }
  // https://api.themoviedb.org/3/person/popular?api_key=729a4b9f9d981662d72f3372b90203a9&language=en-US&page=1

  const getPerson = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=729a4b9f9d981662d72f3372b90203a9&include_adult&page=${count}`
      );
      const data = await response.json();
      setLoading(false);
      // console.log(data);
      setPerson(data.results);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getPerson(person);
  }, []);
  console.log(person);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className={css.container}>
        <div className={css.person}>
          {person?.map((item, index) => {
            return (
              <Person
                id={"person" + "/" + item.id}
                name={item.name}
                img={item.profile_path}
                character={item.known_for_department}
                known_for={item.known_for}
                key={item.id + index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
