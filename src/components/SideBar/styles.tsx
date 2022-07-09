import styled from "styled-components";
import {
  COLOR,
  TEXT_SIZE,
  Z_INDEX,
  NAVBAR_HEIGHT,
} from "../../utilities/constants";

export const SideBar = styled.aside`
  background-color: ${COLOR.WHITE};

  position: fixed;
  left: 0;
  top: ${NAVBAR_HEIGHT};
  z-index: ${Z_INDEX.SIDEBAR};

  width: 17rem;
  height: calc(100% - ${NAVBAR_HEIGHT});

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
  }
`;

export const Menu = styled.ul`
  color: ${COLOR.GRAY};
  font-size: ${TEXT_SIZE.MEDIUM};
`;

type MenuItemProps = {
  pageTitle: string;
  currentPage: string;
  disabled?: boolean;
};

export const MenuItem = styled.li<MenuItemProps>`
  color: ${(props) =>
    props.currentPage === props.pageTitle ||
    (props.currentPage === "/registi/[director]" &&
      props.pageTitle === "/registi")
      ? COLOR.CYAN
      : COLOR.GRAY};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 0.3rem 0rem;
  text-transform: uppercase;

  &:hover {
    color: ${(props) => (props.disabled ? COLOR.GRAY : COLOR.CYAN)};
  }
`;

MenuItem.defaultProps = {
  pageTitle: "",
  currentPage: "",
  disabled: false,
};

export const CopyText = styled.p`
  color: ${COLOR.GRAY};
  font-size: ${TEXT_SIZE.SMALL};
`;
