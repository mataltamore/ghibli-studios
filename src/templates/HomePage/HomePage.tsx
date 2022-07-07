import React from "react";

import body from "../../content/HomePage.json";
import * as Styled from "./styles";
import Link from "next/link";
import { ROUTE } from "../../utilities/constants";

function HomePage() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          border: "5px dashed pink",
          borderRadius: "15px",
          height: "300px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "5px dashed blue",
            borderRadius: "15px",
            width: "100%",
          }}
        >
          Facebook
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "5px dashed cyan",
            borderRadius: "15px",
            width: "100%",
          }}
        >
          Twitter
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "5px dashed lightgreen",
          borderRadius: "15px",
          height: "300px",
        }}
      >
        Gallery
      </div>
    </>
  );
}

function Header() {
  return (
    <Styled.Header>
      <h1>
        {body.title}
        <span>{body.subtitle}</span>
      </h1>
      <p>{body.description}</p>
      <Styled.ButtonSection>
        <Link href={ROUTE.STORY}>
          <Styled.Button>Vai alla Storia</Styled.Button>
        </Link>
        <Link href={ROUTE.MOVIES}>
          <Styled.Button>Filmografia</Styled.Button>
        </Link>
      </Styled.ButtonSection>
    </Styled.Header>
  );
}

export default HomePage;
