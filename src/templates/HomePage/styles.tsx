import styled, { keyframes } from "styled-components";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";
import NavBar2 from "../../../public/images/navbar-2.jpg";

export const Header = styled.div`
  color: ${COLOR.WHITE};
  background-image: url(${NavBar2.src});
  background-color: ${COLOR.CYAN};

  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > h1 {
    font-size: ${TEXT_SIZE.HUGE};
    font-weight: 500;

    & > span {
      font-weight: 200;
    }
  }

  & > p {
    font-size: ${TEXT_SIZE.MEDIUM};
    line-height: 1.75rem;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Button = styled.div`
  border: 1px solid ${COLOR.WHITE};
  font-size: ${TEXT_SIZE.MEDIUM};
  cursor: pointer;
  padding: 1rem;
  transition: 250ms ease-in-out;

  &:hover {
    background-color: ${COLOR.CYAN_HOVER};
    transition: 300ms ease-in-out;
  }
`;
