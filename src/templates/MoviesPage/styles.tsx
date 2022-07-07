import styled from "styled-components";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";
import Park from "../../../public/images/park.jpg";

const getLabelColor = (author: string) => {
  switch (author) {
    case "Goro Miyazaki":
      return COLOR.GORO;
    case "Hiromasa Yonebayashi":
      return COLOR.YONEBAYASHI;
    case "Isao Takahata":
      return COLOR.TAKAHATA;
    case "Hayao Miyazaki":
      return COLOR.MIYAZAKI;
    case "Yoshifumi Kondo":
      return COLOR.KONDO;
    default:
      return COLOR.GRAY;
  }
};

export const Header = styled.header`
  background-color: ${COLOR.WHITE};

  background-image: url(${Park.src});

  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 1rem;

  & > div {
    color: ${COLOR.WHITE};
    font-size: ${TEXT_SIZE.LARGE};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    & > h1 {
      font-weight: 500;
    }

    & > svg {
      font-size: ${TEXT_SIZE.HUGE};
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const MovieFilter = styled.div`
  width: 70%;

  .buttonList {
    display: flex;

    position: sticky;
    top: 50px;
    z-index: 1;
  }
`;

export const Aside = styled.aside`
  background-color: ${COLOR.GRAY_100};
  border-left: 10px solid ${COLOR.GRAY_200};
  color: ${COLOR.GRAY};

  width: 30%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;

  & h2 {
    font-weight: 300;
  }
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  padding: 0.2rem;
  font-size: ${TEXT_SIZE.MEDIUM};
`;

type LabelProps = {
  author: string;
};

export const Label = styled.p<LabelProps>`
  background-color: ${(props) => getLabelColor(props.author)};
  font-size: ${TEXT_SIZE.SMALL};
  color: ${COLOR.WHITE};

  padding: 0.2rem 0.5rem;
  border-radius: 3px;
`;

type AuthorButtonProps = {
  backgroundColor?: {
    primary: string;
    secondary: string;
  };
};

export const AuthorButton = styled.button<AuthorButtonProps>`
  color: ${COLOR.GRAY};
  background-color: ${COLOR.GRAY_100};
  border-style: none;
  border-bottom: 3px solid
    ${(props) => props.backgroundColor?.primary || COLOR.GRAY};
  cursor: pointer;
  padding: 1rem;
  flex-grow: 1;

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor?.secondary || COLOR.GRAY_300};
  }
`;

export const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 50px;
  padding: 2rem 2rem 3rem 2rem;
`;

export const Card = styled.div`
  color: ${COLOR.GRAY};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;

  .cover {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 135%;

    & img {
      border-radius: 5px;
    }
  }

  & > p {
    font-size: ${TEXT_SIZE.LARGE};
  }
`;
