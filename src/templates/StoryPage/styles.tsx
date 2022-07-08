import styled from "styled-components";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";
import Banner from "../../../public/images/story-banner.jpg";

export const Header = styled.header`
  background-color: ${COLOR.WHITE};

  background-image: url(${Banner.src});

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
