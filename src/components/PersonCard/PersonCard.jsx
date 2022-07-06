import React from "react";
import { Link } from "react-router-dom";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { RiStarLine } from "react-icons/ri";
import { BiStar } from "react-icons/bi";
const imgUrl = "https://image.tmdb.org/t/p/w300/";

import css from "./PersonCard.module.css";

// id={item.id}
// title={item.title}
// img={item.poster_path}
// vote={item.vote_average}
// key={item.id}

const img2 = "https://image.tmdb.org/t/p/w300/";

const img_rep =
  "https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png";
const img_rep2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-NrycUUNKFHYrGBy7rWNJW7v293RK4zihg&usqp=CAU";

const PersonCard = (item) => {
  const pp = (vote) => {
    if (vote === undefined)
      return item.profile_path ? img2 + item.profile_path : img_rep;
    else if (vote) return img2 + vote;
    else if (vote === null) return img_rep;
  };

  return (
    <div className={css.PersonCard}>
      <Link to={"/" + item.id}>
        <div className={css.img}>
          <img src={pp(item.img)} alt="" />
        </div>
        <div className={css.info}>
          <h1>{item.name}</h1>
          <div className={css.character}>
            {item.character?.map((pp) => (
              <h2 key={pp.id}> {pp.title}</h2>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PersonCard;

//         adult: false
// gender: 2
// id: 71580
// known_for_department: "Acting"
// name: "Benedict Cumberbatch"
// original_name: "Benedict Cumberbatch"
// popularity: 84.892
// profile_path: "/fBEucxECxGLKVHBznO0qHtCGiMO.jpg"
// cast_id: 2
// character: "Alan Turing"
// credit_id: "52fe4d0cc3a368484e1d4157"
// order: 0
