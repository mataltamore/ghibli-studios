import React from "react";
import * as Styled from "./styles";
import Image from "next/image";

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

export default MovieCard;
