import styled from "styled-components";
import { COLOR, Z_INDEX, NAVBAR_HEIGHT } from "../../utilities/constants";

export const DirectorFilter = styled.div`
  & > div {
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
