import React from "react";
import StyledNavBar from "./StyledNavBar";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <StyledNavBar>
        <div>
          <div>
            <GiHamburgerMenu />
            <Link href="/">
              <h1>StudioGhibli</h1>
            </Link>
          </div>
          <ul>
            <li>Seguici su</li>
            <li>
              <a href="#facebook">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="#twitter">
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div>
      </StyledNavBar>
    </>
  );
}

export default NavBar;
