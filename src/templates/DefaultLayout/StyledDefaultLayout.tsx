import styled from "styled-components";
import { MAX_WIDTH } from "../../utilities/constants";

const StyledDefaultLayout = styled.main`
  max-width: ${MAX_WIDTH};

  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

export default StyledDefaultLayout;
