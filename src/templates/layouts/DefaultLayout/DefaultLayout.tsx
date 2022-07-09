import React, { useState } from "react";
import * as Styled from "./styles";

import NavBar from "../../../components/NavBar/NavBar";
import SideBar from "../../../components/SideBar/SideBar";

type Props = {
  children: React.ReactNode;
};

function DefaultLayout(props: Props) {
  const { children } = props;
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <Styled.DefaultLayout>
      {toggleSideBar && <SideBar />}
      <NavBar sidebarState={{ toggleSideBar, setToggleSideBar }} />
      {children}
    </Styled.DefaultLayout>
  );
}

DefaultLayout.defaultProps = {
  children: undefined,
};

export default DefaultLayout;
