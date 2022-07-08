import body from "../../content/MoviesPage.json";
import * as Styled from "./styled";

function MovieList() {
  return (
    <>
      <h2>Filmografia temporale</h2>
      <div>
        {body.movies.map((movie) => (
          <Styled.MovieItem key={movie.title}>
            <Styled.Label author={movie.author}>{movie.year}</Styled.Label>
            <p>{movie.title}</p>
          </Styled.MovieItem>
        ))}
      </div>
    </>
  );
}

export default MovieList;
