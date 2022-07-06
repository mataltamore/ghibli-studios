import styled from "styled-components";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";

export const NavBar = styled.nav`
  background-color: ${COLOR.WHITE};

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  height: 50px;
  padding-inline: 1rem;

  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 1;

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &__logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      cursor: pointer;
    }
  }
`;

export const Heading = styled.h1`
   {
    background-color: ${COLOR.CYAN};
    color: ${COLOR.WHITE};

    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 50px;
    cursor: pointer;
    padding-inline: 1rem;
  }
`;

export const List = styled.ul`
   {
    color: ${COLOR.GRAY};
    font-size: ${TEXT_SIZE.MEDIUM};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-weight: 600;
  }
`;
