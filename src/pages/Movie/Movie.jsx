import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Card from "./../../components/card";
import CastCard from "./../../components/CastCard/CastCard";
// import PersonCard from "../../components/PersonCard/PersonCard";
import Loading from "./../Loading/Loading";
import { RiPlayCircleFill } from "react-icons/ri";
// import { AiFillStar, RiPlayCircleFill } from "react-icons/ai";
// import {
//   BiTimeFive,
//   BiCalendar,
//   BiFlag,
//   BsStarFill,
//   BiPlayCircle
// } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
// import { BiTimeFive } from "react-icons/Bi";

import { useParams } from "react-router-dom";

import css from "./Movie.module.css";

// import "../Home/Home.css";

// const erty = "100";

const img_rep =
  "https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png";
const img2 = "https://image.tmdb.org/t/p/w500";
const img22 = "https://image.tmdb.org/t/p/w500/t/p/w1920_and_h600_multi_faces/";

function Movie() {
  let Params = useParams();
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${Params.id}?api_key=729a4b9f9d981662d72f3372b90203a9&append_to_response=recommendations,Director,translations,certification,Trailers,credits,videos,images
      `
    );

    const dataa = await data.json();
    setDetails(dataa);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  // const voteClass = (vote) => {
  //   if (vote === false) return "green";
  //   else if (vote === true) return "red";
  //   else return "orange";
  // };

  console.log(details);

  return (
    <>
      <Helmet>
        <title>{details.title + " - app"}</title>
      </Helmet>

      <div className={css.container}>
        {/* {details?.videos?.results?.map((item, index) => {
          // type: "Trailer"
          // official: true
          if (
            item.type == "Trailer" ??
            item.fficial == true ??
            item.site == "YouTube"
          ) {
            return index;
            // <BsStarFill />;
          }
        })} */}

        <div className={css.sss}>
          <div className={css.move_info}>
            {/* details.videos.results.0.key */}
            {/* <a href="https://www.google.com"> */}
            <div className={css.img}>
              <img
                className={css.imgg}
                src={img2 + details.poster_path}
                alt={details.title}
              />
            </div>
            {/* </a> */}
            <div className={css.info}>
              <div className={css.inf}>
                <h1 className={css.title}>{details.title}</h1>
                {details.release_date}
                <h6>" {details.tagline}"</h6>
                <div className={css.vote}>
                  <h1>{details.vote_average}</h1>
                  <h5>/10</h5>
                  <BsStarFill />
                </div>
              </div>
              <div className={css.genres}>
                {details.genres?.map((item, index) => (
                  <div key={item.id} className={css.genre}>
                    {item.name}
                  </div>
                ))}
                <h5 className={css.in}>
                  {/* <BiTimeFive /> */}
                  runtime: {details.runtime}
                </h5>
              </div>
              <h1>overview</h1>
              <p>{details.overview}</p>
            </div>
          </div>

          <div className={css.cast}>
            <div className={css.ss}>
              {details.credits?.cast?.map((item, index) => (
                <CastCard
                  id={"person" + "/" + item.id}
                  name={item.name}
                  img={item.profile_path}
                  character={item.character}
                  key={item.id + index}
                />
              ))}
            </div>
          </div>
          <div className={css.recommendations}>
            {details.recommendations?.results?.map((item, index) => (
              <Card
                key={item.id + index}
                // keyy={item.id + index}
                suits-suit={"rec"}
                id={item.media_type + "/" + item.id}
                title={item.title}
                img={item.poster_path}
                vote={item.vote_average}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
