import React from "react";
import * as Styled from "./styles";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { COLOR, TEXT_SIZE } from "../../utilities/constants";

type Props = {
  sidebarState: {
    toggleSideBar: boolean;
    setToggleSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

function NavBar(props: Props) {
  const { sidebarState } = props;
  const { toggleSideBar, setToggleSideBar } = sidebarState;

  function handleButton() {
    setToggleSideBar((prev: boolean) => !prev);
  }

  return (
    <Styled.NavBar>
      <div className="content">
        <div className="content__logo">
          <Styled.HamburgerButton type="button" onClick={() => handleButton()}>
            {toggleSideBar ? (
              <MdOutlineCancel
                style={{ color: COLOR.CYAN, fontSize: TEXT_SIZE.LARGE }}
              />
            ) : (
              <GiHamburgerMenu
                style={{ color: COLOR.CYAN, fontSize: TEXT_SIZE.LARGE }}
              />
            )}
          </Styled.HamburgerButton>

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
