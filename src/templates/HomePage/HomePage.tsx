import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import Image from "next/image";
import NavBar2 from "../../../public/images/navbar-2.png";
import DefaultLayout from "../DefaultLayout/DefaultLayout";
import SideBar from "../../components/SideBar/SideBar";

function HomePage() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <DefaultLayout>
      <SideBar toggleSideBar={toggleSideBar} />
      <NavBar setToggleSideBar={setToggleSideBar} />
      <Image src={NavBar2} alt="foo" />
    </DefaultLayout>
  );
}

export default HomePage;
