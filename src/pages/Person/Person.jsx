import { react, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Card from "./../../components/card";
import CastCard from "./../../components/CastCard/CastCard";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare
} from "react-icons/ai";

import css from "../Movie/Movie.module.css";

// import "./Home.css";
import { useParams } from "react-router-dom";
import { FaVirusSlash } from "react-icons/fa";

const img2 = "https://image.tmdb.org/t/p/w500/";

function Home() {
  let Params = useParams();
  const [person, setPerson] = useState([]);

  const getMovies = async () => {
    const data = await fetch(
      // ` https://api.themoviedb.org/3/person/${Params.id}?api_key=729a4b9f9d981662d72f3372b90203a9&include_adult&language=en-US
      //   `
      ` https://api.themoviedb.org/3/person/${Params.id}?api_key=729a4b9f9d981662d72f3372b90203a9&language=en-US&append_to_response=external_ids,combined_credits,videos,images,tagged_image
      `
    );
    const recipes = await data.json();
    setPerson(recipes);
  };
  useEffect(() => {
    getMovies(person);
  }, []);
  console.log(person);
  const ids = (id) => {
    if (id === "") return;
    else if (id === null) return;
    else if (id) return id;
  };
  console.log(ids);

  // console.log(JSON.stringify(ids));

  return (
    <>
      <Helmet>
        <title>{person.name + " - app"}</title>
      </Helmet>

      <div className={css.container}>
        <div className={css.sss}>
          <div className={css.move_info}>
            {/* details.videos.results.0.key */}
            {/* <a href="https://www.google.com"> */}
            <div className={css.img}>
              <img
                className={css.imgg}
                src={img2 + person.profile_path}
                alt={person.name}
              />
            </div>
            {/* </a> */}
            <div className={css.info}>
              <div className={css.inf}>
                <h1 className={css.name}>{person.name}</h1>
                {person.release_date}
                <h6>" {person.known_for_department}"</h6>
              </div>
              <div className={css.genres}>
                {person.genres?.map((item, index) => (
                  <div key={item.id} className={css.genre}>
                    {item.name}
                  </div>
                ))}
                <h5 className={css.in}>
                  {/* <BiTimeFive /> */}
                  birthday: {person.birthday}
                </h5>
              </div>
              <h1>biography</h1>
              <p>{person.biography}</p>
            </div>
          </div>

          <div className={css.cast}>
            <div className={css.ss}>
              {person.images?.profiles?.map((item, index) => (
                <CastCard
                  name={item.name}
                  img={item.file_path}
                  character={item.character}
                  key={item.id + index}
                />
              ))}
            </div>
          </div>
          <div className={css.recommendations}>
            {person.combined_credits?.cast?.map((item, index) => (
              <Card
                key={item.id + index}
                // keyy={item.id + index}
                suits-suit={"rec"}
                id={item.media_type + "/" + item.id}
                title={item.name || item.title}
                img={item.poster_path}
                vote={item.vote_average}
              />
            ))}

            {person.combined_credits?.crew?.map((item, index) => (
              <Card
                key={item.id + index}
                // keyy={item.id + index}
                suits-suit={"rec"}
                id={item.media_type + "/" + item.id}
                title={item.name || item.title}
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

export default Home;

// <>
//   <Helmet>
//     <title>{person.name + " - app"}</title>
//   </Helmet>
//   <div className={css.container}>
//     <div className={css.sss}>
//       <div className={css.move_info}>
//         {/* details.videos.results.0.key */}
//         {/* <a href="https://www.google.com"> */}
//         <div className={css.img}>
//           <img
//             className={css.imgg}
//             src={img2 + person.profile_path}
//             alt={person.name}
//           />
//         </div>
//         {/* </a> */}
//         <div className={css.info}>
//           <div className={css.inf}>
//             <h1
//               style={{
//                 fontSize: "1.5rem"
//               }}
//               className={css.title}
//             >
//               {person.name}
//             </h1>
//             <h6>
//               <span> </span>"{person.known_for_department}"
//             </h6>
//           </div>
//           <div className={css.ids}>
//             <a href={ids(person.external_ids?.facebook_id)}>
//               <AiFillFacebook />
//             </a>
//             <a href={ids(person.external_ids?.instagram_id)}>
//               <AiFillInstagram />
//             </a>
//             <a href={ids(person.external_ids?.twitter_id)}>
//               <AiFillTwitterSquare />
//             </a>
//           </div>
//           {/* <div className={css.genres}>
//           {person.also_known_as?.map((item) => (
//             <div className={css.genre}>{item}</div>
//           ))}
//         </div> */}
//           <h1>biography</h1>
//           <p>{person.biography}</p>
//           <div>
//             <h1 className={css.in}>{"birth day : " + person.birthday}</h1>
//             <h1 className={css.in}>{"death day : " + person.deathday}</h1>
//             <h1 className={css.in}>
//               {"place of birth : " + person.place_of_birth}
//             </h1>
//           </div>
//         </div>
//       </div>
//       <div className={css.imgs}>
//         <div className={css.imga}>
//           {person.images?.profiles?.map((item) => (
//             <a href={img2 + item.file_path}>
//               <img
//                 src={img2 + item.file_path}
//                 style={{
//                   width: "100px"
//                 }}
//                 alt=""
//               />
//             </a>
//           ))}
//         </div>
//       </div>
//       <div className={css.recommendations}>
//         {person.combined_credits?.cast?.map((item) => (
//           <Card
//             id={item.media_type + "/" + item.id}
//             title={item.title}
//             img={item.poster_path}
//             vote={item.vote_average}
//             rec={"rec"}
//             key={item.id}
//           />
//         ))}
//         {person.combined_credits?.crew?.map((item) => (
//           <Card
//             id={item.media_type + "/" + item.id}
//             title={item.title}
//             img={item.poster_path}
//             vote={item.vote_average}
//             key={item.id}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// </>
