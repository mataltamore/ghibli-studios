import React, { useState } from "react";
import * as Styled from "./styles";
import { BiCameraMovie } from "react-icons/bi";
import body from "../../content/MoviesPage.json";
import MovieList from "../../components/MovieList/MovieList";
import StandardPageLayout from "../layouts/StandardPageLayout/StandardPageLayout";
import Park from "../../../public/images/park.jpg";
import MovieCard from "../../components/MovieCard/MovieCard";

function MoviesPage() {
  return (
    <StandardPageLayout
      cover={Park.src}
      title="Filmografia"
      mainContent={<MovieFilter />}
      sideContent={<MovieList />}
    >
      <BiCameraMovie />
    </StandardPageLayout>
  );
}

function MovieFilter() {
  const ALL_MOVIES = "All Movies";
  const [authorSelected, setAuthorSelected] = useState(ALL_MOVIES);

  function handleChangeAuthor(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setAuthorSelected(event.currentTarget.value);
  }

  const filterMoviesByAuthorSelected = body.movies.filter(
    (movie) => authorSelected === ALL_MOVIES || movie.author === authorSelected
  );

  return (
    <Styled.MovieFilter>
      <div className="buttonList">
        <Styled.AuthorButton
          type="button"
          value={ALL_MOVIES}
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

export default MoviesPage;
