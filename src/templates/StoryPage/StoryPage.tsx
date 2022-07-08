import React from "react";
import * as Styled from "./styles";
import { BsJournalBookmarkFill } from "react-icons/bs";
import MovieList from "../../components/MovieList/MovieList";
import StandardPageLayout from "../layouts/StandardPageLayout/StandardPageLayout";
import Banner from "../../../public/images/story-banner.jpg";

function StoryPage() {
  return (
    <StandardPageLayout
      cover={Banner.src}
      icon={BsJournalBookmarkFill}
      title="La Storia"
      mainContent={<div>StoryPage</div>}
      sideContent={<MovieList />}
    />
  );
}

export default StoryPage;
