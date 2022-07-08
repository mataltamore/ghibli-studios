import styled from "styled-components";
import {
  COLOR,
  TEXT_SIZE,
  Z_INDEX,
  NAVBAR_HEIGHT,
} from "../../utilities/constants";

export const NavBar = styled.nav`
  background-color: ${COLOR.WHITE};

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  height: ${NAVBAR_HEIGHT};

  width: 100%;
  position: sticky;
  top: 0px;
  z-index: ${Z_INDEX.NAVBAR};

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-right: 1.25rem;

    &__logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
  }
`;

export const HamburgerButton = styled.button`
  background-color: ${COLOR.WHITE};
  color: ${COLOR.WHITE};

  width: ${NAVBAR_HEIGHT};
  height: ${NAVBAR_HEIGHT};
  border: none;
  cursor: pointer;
  padding-inline: 1rem;
`;

export const Heading = styled.h1`
  background-color: ${COLOR.CYAN};
  color: ${COLOR.WHITE};

  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: ${NAVBAR_HEIGHT};
  cursor: pointer;
  padding-inline: 1rem;
`;

export const List = styled.ul`
  color: ${COLOR.GRAY};
  font-size: ${TEXT_SIZE.MEDIUM};

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  font-weight: 600;
`;
