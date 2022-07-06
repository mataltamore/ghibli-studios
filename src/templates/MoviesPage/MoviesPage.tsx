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
        <Styled.MovieFilter>
          <div className="buttonList">
            {body.authors.map((author) => (
              <Styled.AuthorButton
                type="button"
                key={author.name}
                backgroundColor={author.color}
              >
                {author.name}
              </Styled.AuthorButton>
            ))}
          </div>
          <Styled.GridList>
            {body.movies.map((movie) => {
              const authorFound = body.authors.find(
                (author) => author.name === movie.author
              );
              return authorFound ? (
                <MovieCard
                  key={movie.title}
                  title={movie.title}
                  year={movie.year}
                  author={authorFound.name}
                />
              ) : null;
            })}
          </Styled.GridList>
        </Styled.MovieFilter>
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

type MovieCardProps = {
  title: string;
  year: number;
  author: string;
};

function MovieCard(props: MovieCardProps) {
  const { year, author, title } = props;

  return (
    <div>
      <div>image</div>
      <div>
        <p>{year}</p>
        <p>{author}</p>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default MoviesPage;
