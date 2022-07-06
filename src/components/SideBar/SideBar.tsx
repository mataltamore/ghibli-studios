import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import Image from "next/image";
import SidebarImage from "../../../public/images/sidebar.png";

function SideBar() {
  return (
    <Styled.SideBar>
      <div>
        <Image src={SidebarImage} alt="Ghibli Sidebar" />
        <Styled.Menu>
          <Link href="/">
            <li>Homepage</li>
          </Link>
          <Link href="/1">
            <li>News/Blog</li>
          </Link>
          <li>Lo Studio</li>
          <Styled.SubMenu>
            <Link href="/3">
              <li>La storia</li>
            </Link>
            <Link href="/4">
              <li>I registi</li>
            </Link>
          </Styled.SubMenu>
          <Link href="/5">
            <li>Filmografia</li>
          </Link>
          <Link href="/6">
            <li>Multimedia</li>
          </Link>
          <Link href="/7">
            <li>Contatti</li>
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
