import styled from "styled-components";
import {
  COLOR,
  Z_INDEX,
  NAVBAR_HEIGHT,
  TEXT_SIZE,
} from "../../utilities/constants";
import { getLabelColor } from "../../utilities/functions";

export const DirectorFilter = styled.div`
  display: flex;

  position: sticky;
  top: ${NAVBAR_HEIGHT};
  z-index: ${Z_INDEX.ABOVE};
`;

type DirectorButtonProps = {
  backgroundColor?: {
    primary: string;
    secondary: string;
  };
};

export const DirectorButton = styled.button<DirectorButtonProps>`
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

type MainProps = {
  director: string;
};

export const Main = styled.div<MainProps>`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 1.5rem;

  .image {
    border: 0.5rem solid ${(props) => getLabelColor(props.director)};
    border-radius: 5px;
    position: relative;
    min-width: 24rem;
    height: 24rem;
  }

  .biography {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    & > p {
      color: ${COLOR.GRAY};
      font-size: ${TEXT_SIZE.MEDIUM};
      line-height: 1.25rem;
      text-align: justify;
    }
  }

  .title {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    color: ${(props) => getLabelColor(props.director)};

    & > h2 {
      font-size: ${TEXT_SIZE.HUGE};
      font-weight: 500;
    }

    & > h3 {
      font-size: ${TEXT_SIZE.MEDIUM};
      font-weight: 400;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > h4 {
      color: ${COLOR.GRAY};
      font-weight: 500;
    }
  }
`;
