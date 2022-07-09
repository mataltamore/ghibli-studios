import React from "react";
import * as Styled from "./styles";
import Image from "next/image";

type MovieCardProps = {
  title: string;
  year: number;
  director: string;
  image: string;
};

function MovieCard(props: MovieCardProps) {
  const { year, director, title, image } = props;

  return (
    <Styled.Card>
      <div className="cover">
        <Image src={image} alt={title} layout="fill" />
      </div>
      <div>
        <Styled.MovieItem>
          <Styled.Label director={director}>{year}</Styled.Label>
          <p>{director}</p>
        </Styled.MovieItem>
      </div>
      <p>{title}</p>
    </Styled.Card>
  );
}

export default MovieCard;
