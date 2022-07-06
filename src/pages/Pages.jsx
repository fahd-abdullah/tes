import React from "react";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import TvShows from "./TvShows/TvShows";
import Season from "./TvShows/Season/Season";
import Search from "./Search/Search";
import TopRated from "./TopRated/TopRated";
import Person from "./Person/Person";
import Persons from "./Person/Persons";
import Nav from "../components/Nav/Nav";

// import Error from "../pages/Error/Error";
import { Route, Routes, useLocation } from "react-router-dom";

function Pages() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<TvShows />} />
        <Route path="/Season/:id/:ids" element={<Season />} />
        <Route path="/TopRated" element={<TopRated />} />
        <Route path="/Search/:inpot" element={<Search />} />
        <Route path="/persons" element={<Persons />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<Home />} />

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default Pages;
