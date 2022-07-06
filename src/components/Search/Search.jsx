import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import css from "./Search.module.css";

function Search(inpot) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/Search/" + input);
  };
  return (
    <>
      <form className={css.min} onSubmit={submitHandler}>
        <div className={css.div}>
          <h1>SEARCH</h1>
          <div className={css.tre}>
            <FaSearch onClick={submitHandler} />
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              placeholder={inpot.inpot || "SEARCH"}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
