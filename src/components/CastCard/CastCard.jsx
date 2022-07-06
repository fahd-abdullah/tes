import React from "react";
import { Link } from "react-router-dom";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { RiStarLine } from "react-icons/ri";
import { BiStar } from "react-icons/bi";
const imgUrl = "https://image.tmdb.org/t/p/w300/";

import css from "./CastCard.module.css";

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

const CastCard = (item) => {
  const pp = (vote) => {
    if (vote === undefined)
      return item.profile_path ? img2 + item.profile_path : img_rep;
    else if (vote) return img2 + vote;
    else if (vote === null) return img_rep;
  };

  const adult = (vote) => {
    if (vote === true) return css.adult;
  };
  const video = (vote) => {
    if (vote === true) return css.video;
  };
  return (
    <div className={css.card} key={item.keyy}>
      <Link to={"/" + item.id}>
        <div className={adult(item.adult)}></div>
        <div className={video(item.video)}></div>
        <div className={css.img}>
          <img src={pp(item.img)} alt="" />
        </div>
        <div className={css.vote}>
          <div className={css.name}>
            <h1>{item.name}</h1>
            <h2>{item.character}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CastCard;
