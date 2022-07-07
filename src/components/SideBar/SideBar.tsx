import React, { useState } from "react";
import * as Styled from "./styles";
import Link from "next/link";
import Image from "next/image";
import SidebarImage from "../../../public/images/sidebar.png";
import { useRouter } from "next/router";

function SideBar() {
  const { pathname: currentPage } = useRouter();

  return (
    <Styled.SideBar>
      <div>
        <Image src={SidebarImage} alt="Ghibli Sidebar" />
        <Styled.Menu>
          <Link href="/">
            <Styled.MenuItem pageTitle="/" currentPage={currentPage}>
              Homepage
            </Styled.MenuItem>
          </Link>
          <Link href="/news">
            <Styled.MenuItem pageTitle="/news" currentPage={currentPage}>
              News
            </Styled.MenuItem>
          </Link>
          <Link href="/studio">
            <Styled.MenuItem pageTitle="/studio" currentPage={currentPage}>
              Lo Studio
            </Styled.MenuItem>
          </Link>
          <Link href="/filmografia">
            <Styled.MenuItem pageTitle="/filmografia" currentPage={currentPage}>
              Filmografia
            </Styled.MenuItem>
          </Link>
          <Link href="/multimedia">
            <Styled.MenuItem pageTitle="/multimedia" currentPage={currentPage}>
              Multimedia
            </Styled.MenuItem>
          </Link>
          <Link href="/contatti">
            <Styled.MenuItem pageTitle="/contatti" currentPage={currentPage}>
              Contatti
            </Styled.MenuItem>
          </Link>
        </Styled.Menu>
      </div>
      <Styled.CopyText>
        &copy; 2022 all rights reserved Studio Ghibli Italia
        (www.studioghibli.it)
      </Styled.CopyText>
    </Styled.SideBar>
  );
}

export default SideBar;
