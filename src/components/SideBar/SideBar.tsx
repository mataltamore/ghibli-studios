import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import Image from "next/image";
import SidebarImage from "../../../public/images/sidebar.png";
import { useRouter } from "next/router";
import { ROUTE, ROUTE_DIRECTORS } from "../../utilities/constants";

function SideBar() {
  const { pathname: currentPage } = useRouter();

  return (
    <Styled.SideBar>
      <div>
        <Image src={SidebarImage} alt="Ghibli Sidebar" />
        <Styled.Menu>
          <Link href={ROUTE.HOME}>
            <Styled.MenuItem pageTitle={ROUTE.HOME} currentPage={currentPage}>
              Homepage
            </Styled.MenuItem>
          </Link>
          {/*<Link href={ROUTE.NEWS}>*/}
          <Styled.MenuItem
            pageTitle={ROUTE.NEWS}
            currentPage={currentPage}
            disabled
          >
            News
          </Styled.MenuItem>
          {/*</Link>*/}
          <Link href={ROUTE.STORY}>
            <Styled.MenuItem pageTitle={ROUTE.STORY} currentPage={currentPage}>
              La Storia
            </Styled.MenuItem>
          </Link>
          <Link href={ROUTE_DIRECTORS.HAYAO_MIYAZAKI}>
            <Styled.MenuItem
              pageTitle={ROUTE.DIRECTORS}
              currentPage={currentPage}
            >
              I registi
            </Styled.MenuItem>
          </Link>
          <Link href={ROUTE.MOVIES}>
            <Styled.MenuItem pageTitle={ROUTE.MOVIES} currentPage={currentPage}>
              Filmografia
            </Styled.MenuItem>
          </Link>
          {/*<Link href={ROUTE.MEDIA}>*/}
          <Styled.MenuItem
            pageTitle={ROUTE.MEDIA}
            currentPage={currentPage}
            disabled
          >
            Multimedia
          </Styled.MenuItem>
          {/*</Link>*/}
          {/*<Link href={ROUTE.CONTACTS}>*/}
          <Styled.MenuItem
            pageTitle={ROUTE.CONTACTS}
            currentPage={currentPage}
            disabled
          >
            Contatti
          </Styled.MenuItem>
          {/*</Link>*/}
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
