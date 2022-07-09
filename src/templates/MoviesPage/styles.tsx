import styled from "styled-components";
import { COLOR, Z_INDEX, NAVBAR_HEIGHT } from "../../utilities/constants";

export const MovieFilter = styled.div`
  .buttonList {
    display: flex;

    position: sticky;
    top: ${NAVBAR_HEIGHT};
    z-index: ${Z_INDEX.ABOVE};
  }
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

export const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 50px;
  padding: 2rem 2rem 3rem 2rem;
`;
