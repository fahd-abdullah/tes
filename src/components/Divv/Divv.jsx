import { React, useState } from "react";
import { Link } from "react-router-dom";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { RiStarLine } from "react-icons/ri";
import { BiStar } from "react-icons/bi";
const imgUrl = "https://image.tmdb.org/t/p/w300/";

import css from "./Diiv.module.css";

const Diiv = () => {
  const [count, setCount] = useState("movie");

  return (
    <div className={css.but}>
      <button onClick={() => setCount("movie")}>movie</button>
      <button onClick={() => setCount("tvshows")}>TV SHOWS</button>
    </div>
    // <div className={css.divv}>
    //   <button>movie</button>
    //   <span></span>
    //   <button>TV SHOWS</button>
    // </div>
  );
};

export default Diiv;
