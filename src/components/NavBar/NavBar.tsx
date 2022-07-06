import React from "react";
import * as Styled from "./styles";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";

function NavBar() {
  return (
    <Styled.NavBar>
      <div className="content">
        <div className="content__logo">
          <GiHamburgerMenu
            style={{ color: COLOR.CYAN, fontSize: TEXT_SIZE.LARGE }}
          />
          <Link href="/">
            <Styled.Heading>StudioGhibli</Styled.Heading>
          </Link>
        </div>
        <Styled.List>
          <li>Seguici su</li>
          <li>
            <a href="#facebook">
              <BsFacebook
                style={{ color: COLOR.FACEBOOK, fontSize: TEXT_SIZE.LARGE }}
              />
            </a>
          </li>
          <li>
            <a href="#twitter">
              <BsTwitter
                style={{ color: COLOR.TWITTER, fontSize: TEXT_SIZE.LARGE }}
              />
            </a>
          </li>
        </Styled.List>
      </div>
    </Styled.NavBar>
  );
}

export default NavBar;
