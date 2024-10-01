import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "./Movie.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Movie = () => {
  let { movie_name } = useParams();
  const [movieData, setMovieData] = useState([]);

  const getMovieData = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=4e9e8ed7&t=" + movie_name)
      .then((response) => {
        console.log(response);
        const myRepo = response.data;
        setMovieData(myRepo);
      });
  };

  useEffect(() => getMovieData(), []);

  return (
    <>
     
      <Container>
        <h1 style={{ marginTop: "20px" }}>
          {`${movieData.Title} (${movieData.Year})`}
        </h1>
        <hr />
        <div class="mainDiv">
          <Row>
            <Col>
              <img
                src={movieData.Poster}
                alt="movie-poster"
                style={{ width: "20rem" }}
              />
            </Col>
            <Col>
              <div class="details">Director:</div>
              <br />
              <div class="details">Writer:</div>
              <br />
              <div class="details">Language:</div>
              <br />
              <div class="details">Imdb Rating:</div>
              <br />
              <div class="details">Rated:</div>
              <br />
              <div class="details">Genre:</div>
              <br />
              <div class="details">Actors:</div>
              <br />
              <div class="details">Awards:</div>
              <br />
            </Col>
            <Col xs={6}>
              <div class="movie-data">{movieData.Director}</div>
              <br />
              <div class="movie-data">{movieData.Writer}</div>
              <br />
              <div class="movie-data">{movieData.Language}</div>
              <br />
              <div class="movie-data">{movieData.imdbRating}</div>
              <br />
              <div class="movie-data">{movieData.Rated}</div>
              <br />
              <div class="movie-data">{movieData.Genre}</div>
              <br />
              <div class="movie-data">{movieData.Actors}</div>
              <br />
              <div class="movie-data">{movieData.Awards}</div>
              <br />
            </Col>
          </Row>
          <div class="desc">
            <h5>Description:</h5>
          </div>
          <div class="movie-data">{movieData.Plot}</div>
          <br />
        </div>
      </Container>
    </>
  );
};

export default Movie;