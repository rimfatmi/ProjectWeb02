import React, { useState, useEffect } from "react";
import { getSingleMovie, getRecommended } from "../API/Api";
import MovieList from "./MovieList.js";

import Loading from "./../Component/Tools/Loading";
import Error from "./../Component/Tools/Error";

const MovieDetails = (props) => {
  const movieId = props.match.params.id;
  const [movie, setMovie] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadMovie = (id) => {
    getSingleMovie(id)
      .then((res) => {
        setMovie(res);
        if (res.videos.results.length !== 0) {
          setTrailer(res.videos.results[0].key);
        }
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  };
  const loadRecommended = (id) => {
    getRecommended(id).then((res) => {
      setRecommended(res);
    });
  };
};
