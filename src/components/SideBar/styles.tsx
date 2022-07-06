import styled, { keyframes } from "styled-components";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";

const sideBarOpenAnimation = keyframes`
  0% {
    transform:scaleX(0);
    transform-origin:left;
  }
  100% { 
    transform:scaleX(1);
    transform-origin:right;
  }
`;

const sideBarCloseAnimation = keyframes`
  0% { 
    transform:scaleX(1);
    transform-origin:right;
  }
  100% {
    transform:scaleX(0);
    transform-origin:left;
  }
`;

type SideBarProps = {
  toggleSideBar: boolean;
};

export const SideBar = styled.div`
  background-color: ${COLOR.WHITE};

  position: fixed;
  left: 0;
  top: 50px;
  z-index: 1;

  width: 17rem;
  height: calc(100% - 50px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  animation-name: ${(props: SideBarProps) =>
    props.toggleSideBar ? sideBarOpenAnimation : sideBarCloseAnimation};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

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
