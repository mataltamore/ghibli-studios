import styled from "styled-components";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";
import { getLabelColor } from "../../utilities/functions";

export const Card = styled.div`
  color: ${COLOR.GRAY};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;

  .cover {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 135%;

    & img {
      border-radius: 5px;
    }
  }

  & > p {
    font-size: ${TEXT_SIZE.LARGE};
  }
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  padding: 0.2rem;
  font-size: ${TEXT_SIZE.MEDIUM};
`;

type LabelProps = {
  director: string;
};

export const Label = styled.p<LabelProps>`
  background-color: ${(props) => getLabelColor(props.director)};
  font-size: ${TEXT_SIZE.SMALL};
  color: ${COLOR.WHITE};

  padding: 0.2rem 0.5rem;
  border-radius: 3px;
`;
