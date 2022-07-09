import React from "react";
import * as Styled from "./styles";
import { IconType } from "react-icons";

type Props = {
  cover: string;
  title: string;
  mainContent: React.ReactNode;
  sideContent: React.ReactNode;
  children?: React.ReactNode;
};

function StandardPageLayout(props: Props) {
  const { cover, children, title, mainContent, sideContent } = props;
  return (
    <>
      <Styled.Header cover={cover}>
        <div>
          {children}
          <h1>{title}</h1>
        </div>
      </Styled.Header>
      <Styled.Main>
        <div className="mainContent">{mainContent}</div>
        <Styled.Aside className="sideContent">{sideContent}</Styled.Aside>
      </Styled.Main>
    </>
  );
}

export default StandardPageLayout;
