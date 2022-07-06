import React from "react";
import * as Styled from "./styles";

type Props = {
  children: React.ReactNode;
};

function DefaultLayout(props: Props) {
  const { children } = props;

  return <Styled.DefaultLayout>{children}</Styled.DefaultLayout>;
}

DefaultLayout.defaultProps = {
  children: undefined,
};

export default DefaultLayout;
