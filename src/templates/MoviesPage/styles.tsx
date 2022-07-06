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
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 70%;
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

  & > h2 {
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

export const Label = styled.p`
  background-color: ${(props: LabelProps) => getLabelColor(props.author)};
  font-size: ${TEXT_SIZE.SMALL};
  color: ${COLOR.WHITE};

  padding: 0.2rem 0.5rem;
  border-radius: 3px;
`;
