import React from "react";
import StyledDefaultLayout from "./StyledDefaultLayout";

type Props = {
  children: React.ReactNode;
};

function DefaultLayout(props: Props) {
  const { children } = props;

  return <StyledDefaultLayout>{children}</StyledDefaultLayout>;
}

DefaultLayout.defaultProps = {
  children: undefined,
};

export default DefaultLayout;
