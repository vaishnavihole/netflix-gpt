import React from 'react';
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants"

const GptSearch = () => {
  return (
    <div className="absolute -z-10">
      <img
        src={BG_URL} alt="logo" />
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
