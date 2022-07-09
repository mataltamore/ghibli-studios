import * as Styled from "./styled";
import Link from "next/link";

import body from "../../content/mockAPI.json";

function MovieList() {
  return (
    <>
      <h2>Filmografia temporale</h2>
      <div>
        {body.movies.map((movie) => {
          const directorFound = body.directors.find(
            (director) => director.name.latin === movie.director
          );
          if (!directorFound) return null;

          return (
            <Styled.MovieItem key={movie.title}>
              <Link href={directorFound.href}>
                <Styled.Label director={movie.director}>
                  {movie.year}
                </Styled.Label>
              </Link>
              <p>{movie.title}</p>
            </Styled.MovieItem>
          );
        })}
      </div>
    </>
  );
}

export default MovieList;
