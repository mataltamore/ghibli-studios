import styled from "styled-components";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";

export const SideBar = styled.div`
  background-color: ${COLOR.WHITE};

  position: fixed;
  left: 0;
  top: 50px;
  z-index: 1;

  width: 20vw;
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

  & li {
    cursor: pointer;
    padding: 0.3rem 0rem;
    text-trasform: uppercase;

    &:hover {
      color: ${COLOR.CYAN};
    }
  }
`;

export const SubMenu = styled.ul`
  color: ${COLOR.GRAY};
  font-size: ${TEXT_SIZE.MEDIUM};
  border-left: 2px solid ${COLOR.GRAY};

  padding-left: 1rem;

  & li {
    cursor: pointer;
    padding: 0.3rem 0rem;
    text-trasform: uppercase;

    &:hover {
      color: ${COLOR.CYAN};
    }
  }
`;

export const CopyText = styled.p`
  color: ${COLOR.GRAY};
  font-size: ${TEXT_SIZE.SMALL};
`;
