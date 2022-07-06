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
          <Link href="/1">
            <Styled.MenuItem pageTitle="/1" currentPage={currentPage}>
              News/Blog
            </Styled.MenuItem>
          </Link>
          <Link href="/2">
            <Styled.MenuItem pageTitle="/3" currentPage={currentPage}>
              Lo Studio
            </Styled.MenuItem>
          </Link>
          <Link href="/5">
            <Styled.MenuItem pageTitle="/5" currentPage={currentPage}>
              Filmografia
            </Styled.MenuItem>
          </Link>
          <Link href="/6">
            <Styled.MenuItem pageTitle="/6" currentPage={currentPage}>
              Multimedia
            </Styled.MenuItem>
          </Link>
          <Link href="/7">
            <Styled.MenuItem pageTitle="/7" currentPage={currentPage}>
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
