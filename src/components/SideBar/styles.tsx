import styled from "styled-components";
import { COLOR, TEXT_SIZE, Z_INDEX } from "../../utilities/constants";

export const SideBar = styled.aside`
  background-color: ${COLOR.WHITE};

  position: fixed;
  left: 0;
  top: 50px;
  z-index: ${Z_INDEX.SIDEBAR};

  width: 17rem;
  height: calc(100% - 50px);

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
};

export const MenuItem = styled.li`
  color: ${(props: MenuItemProps) =>
    props.currentPage === props.pageTitle ? COLOR.CYAN : COLOR.GRAY};

  cursor: pointer;
  padding: 0.3rem 0rem;
  text-transform: uppercase;

  &:hover {
    color: ${COLOR.CYAN};
  }
`;

export const CopyText = styled.p`
  color: ${COLOR.GRAY};
  font-size: ${TEXT_SIZE.SMALL};
`;
