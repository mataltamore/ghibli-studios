import React, { useState } from "react";
import * as Styled from "./styles";
import { BiCameraMovie } from "react-icons/bi";
import body from "../../content/MoviesPage.json";
import body2 from "../../content/DirectorPage.json";
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
  const [directorSelected, setDirectorSelected] = useState(ALL_MOVIES);

  function handleChangeDirector(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setDirectorSelected(event.currentTarget.value);
  }

  const filterMoviesByDirectorSelected = body.movies.filter(
    (movie) =>
      directorSelected === ALL_MOVIES || movie.director === directorSelected
  );

  return (
    <Styled.MovieFilter>
      <div className="buttonList">
        <Styled.DirectorButton
          type="button"
          value={ALL_MOVIES}
          onClick={(event) => handleChangeDirector(event)}
        >
          Tutti i film
        </Styled.DirectorButton>
        {body2.directors.map((director) => (
          <Styled.DirectorButton
            type="button"
            key={director.name.latin}
            backgroundColor={director.color}
            value={director.name.latin}
            onClick={(event) => handleChangeDirector(event)}
          >
            {director.name.latin}
          </Styled.DirectorButton>
        ))}
      </div>
      <Styled.GridList>
        {filterMoviesByDirectorSelected.map((movie) => {
          const directorFound = body2.directors.find(
            (director) => director.name.latin === movie.director
          );
          return directorFound ? (
            <MovieCard
              key={movie.title}
              title={movie.title}
              year={movie.year}
              director={directorFound.name.latin}
              image={movie.src}
            />
          ) : null;
        })}
      </Styled.GridList>
    </Styled.MovieFilter>
  );
}

export default MoviesPage;
