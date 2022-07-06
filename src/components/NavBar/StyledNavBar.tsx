import styled from "styled-components";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";

const StyledNavBar = styled.nav`
  background-color: ${COLOR.WHITE};

  height: 50px;
  padding-inline: 1rem;

  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 1;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      cursor: pointer;
      color: ${COLOR.CYAN};
      font-size: ${TEXT_SIZE.LARGE};
    }
  }

  & h1 {
    background-color: ${COLOR.CYAN};
    color: ${COLOR.WHITE};

    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 50px;
    cursor: pointer;
    padding-inline: 1rem;
  }

  & ul {
    color: ${COLOR.CYAN};
    font-size: ${TEXT_SIZE.MEDIUM};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-weight: 600;
  }
`;

export default StyledNavBar;
