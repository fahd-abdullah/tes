import React from "react";
import { Link } from "react-router-dom";
// import { AiOutlineShoppingCart } from "react-icons/ai";
const imgUrl = "https://image.tmdb.org/t/p/w300/";

const Ids = (item) => {
  // const pp = (vote) => {
  //   if (vote === undefined)
  //     return item.profile_path ? img2 + item.profile_path : img_rep;
  //   else if (vote) return img2 + vote;
  //   else if (vote === null) return img_rep;
  // };

  // freebase_mid: "/m/01l2fn"
  // freebase_id: "/en/keira_knightley"
  // imdb_id: "nm0461136"
  // tvrage_id: 59055
  // facebook_id: "Keira.C.Knightley"
  // instagram_id: ""
  // twitter_id: ""

  return (
    <div className="card">
      s<Link to={"/" + item.id}>{item.imdb_id}</Link>
    </div>
  );
};

export default Ids;
