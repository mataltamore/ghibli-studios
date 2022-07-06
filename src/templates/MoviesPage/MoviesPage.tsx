import React from "react";
import * as Styled from "./styles";
import { BiCameraMovie } from "react-icons/bi";

import body from "../../content/MoviesPage.json";

function MoviesPage() {
  return (
    <>
      <Styled.Header>
        <div>
          <BiCameraMovie />
          <h1>Filmografia</h1>
        </div>
      </Styled.Header>
      <Styled.Main>
        <div>Lista</div>
        <MovieList />
      </Styled.Main>
    </>
  );
}

function MovieList() {
  return (
    <Styled.Aside>
      <h2>Filmografia temporale</h2>
      <div>
        {body.movies.map((movie) => (
          <Styled.MovieItem key={movie.title}>
            <Styled.Label author={movie.author}>{movie.year}</Styled.Label>
            <p>{movie.title}</p>
          </Styled.MovieItem>
        ))}
      </div>
    </Styled.Aside>
  );
}

export default MoviesPage;
