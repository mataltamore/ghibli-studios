import styled from "styled-components";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.875rem;

  padding: 2rem;
`;

export const Slider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  & svg {
    font-size: ${TEXT_SIZE.HUGE};
    color: ${COLOR.CYAN};

    cursor: pointer;
  }

  & > div {
    background-color: ${COLOR.CYAN};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    border-radius: 30px;
    padding: 1rem 2rem;
  }

  & input {
    cursor: pointer;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  & h2 {
    color: ${COLOR.GRAY};
    font-size: ${TEXT_SIZE.LARGE};
  }

  & p {
    color: ${COLOR.GRAY};
    font-size: ${TEXT_SIZE.MEDIUM};
    line-height: 1.25rem;
    text-align: justify;
  }
`;
