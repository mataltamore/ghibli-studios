import React, { useState } from "react";
import * as Styled from "./styles";
import { BiCameraMovie } from "react-icons/bi";
import Image from "next/image";
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
        <MovieFilter />
        <MovieList />
      </Styled.Main>
    </>
  );
}

function MovieFilter() {
  const [authorSelected, setAuthorSelected] = useState("Tutti i film");

  function handleChangeAuthor(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setAuthorSelected(event.currentTarget.value);
  }

  const filterMoviesByAuthorSelected = body.movies.filter(
    (movie) =>
      authorSelected === "All Movies" || movie.author === authorSelected
  );

  return (
    <Styled.MovieFilter>
      <div className="buttonList">
        <Styled.AuthorButton
          type="button"
          value={"All Movies"}
          onClick={(event) => handleChangeAuthor(event)}
        >
          Tutti i film
        </Styled.AuthorButton>
        {body.authors.map((author) => (
          <Styled.AuthorButton
            type="button"
            key={author.name}
            backgroundColor={author.color}
            value={author.name}
            onClick={(event) => handleChangeAuthor(event)}
          >
            {author.name}
          </Styled.AuthorButton>
        ))}
      </div>
      <Styled.GridList>
        {filterMoviesByAuthorSelected.map((movie) => {
          const authorFound = body.authors.find(
            (author) => author.name === movie.author
          );
          return authorFound ? (
            <MovieCard
              key={movie.title}
              title={movie.title}
              year={movie.year}
              author={authorFound.name}
              image={movie.src}
            />
          ) : null;
        })}
      </Styled.GridList>
    </Styled.MovieFilter>
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
  image: string;
};

function MovieCard(props: MovieCardProps) {
  const { year, author, title, image } = props;

  return (
    <Styled.Card>
      <div className="cover">
        <Image src={image} alt={title} layout="fill" />
      </div>
      <div>
        <Styled.MovieItem>
          <Styled.Label author={author}>{year}</Styled.Label>
          <p>{author}</p>
        </Styled.MovieItem>
      </div>
      <p>{title}</p>
    </Styled.Card>
  );
}

export default MoviesPage;
