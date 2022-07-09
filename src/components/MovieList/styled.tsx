import styled from "styled-components";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";
import { getLabelColor } from "../../utilities/functions";

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

  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
`;
