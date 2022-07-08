import React, { useState } from "react";
import * as Styled from "./styles";
import { BsJournalBookmarkFill } from "react-icons/bs";
import MovieList from "../../components/MovieList/MovieList";
import StandardPageLayout from "../layouts/StandardPageLayout/StandardPageLayout";
import Banner from "../../../public/images/story-banner.jpg";
import body from "../../content/StoryPage.json";

function StoryPage() {
  return (
    <StandardPageLayout
      cover={Banner.src}
      icon={BsJournalBookmarkFill}
      title="La Storia"
      mainContent={<Story />}
      sideContent={<MovieList />}
    />
  );
}

function Story() {
  const [currentChapter, setCurrentChapter] = useState(0);

  function handleChangeChapter(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentChapter(Number.parseInt(event.currentTarget.value));
  }

  return (
    <Styled.Main>
      <Styled.Slider>
        {body.story.map((chapter, i) => (
          <label key={chapter.title}>
            <input
              type="radio"
              name="story"
              value={i}
              defaultChecked={i === 0}
              onChange={(event) => handleChangeChapter(event)}
            />
          </label>
        ))}
      </Styled.Slider>
      <Styled.Text>
        <h2>{body.story[currentChapter].title}</h2>
        <p>{body.story[currentChapter].description}</p>
      </Styled.Text>
    </Styled.Main>
  );
}

export default StoryPage;
