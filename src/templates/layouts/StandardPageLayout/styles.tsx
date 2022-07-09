import styled from "styled-components";
import { COLOR, TEXT_SIZE } from "../../../utilities/constants";

type HeaderProps = {
  cover: string;
};

export const Header = styled.header<HeaderProps>`
  background-color: ${COLOR.WHITE};

  background-image: url(${(props) => props.cover});

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

  .mainContent {
    width: 70%;
  }

  .sideContent {
    width: 30%;
  }
`;

export const Aside = styled.aside`
  background-color: ${COLOR.GRAY_100};
  border-left: 10px solid ${COLOR.GRAY_200};
  color: ${COLOR.GRAY};

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
