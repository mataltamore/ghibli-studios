import React, { useState } from "react";
import * as Styled from "./styles";
import { BsJournalBookmarkFill } from "react-icons/bs";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import MovieList from "../../components/MovieList/MovieList";
import StandardPageLayout from "../layouts/StandardPageLayout/StandardPageLayout";
import Banner from "../../../public/images/story-banner.jpg";
import body from "../../content/StoryPage.json";

enum ACTION {
  decrement,
  increment,
}

function StoryPage() {
  return (
    <StandardPageLayout
      cover={Banner.src}
      title="La Storia"
      mainContent={<Story />}
      sideContent={<MovieList />}
    >
      <BsJournalBookmarkFill />
    </StandardPageLayout>
  );
}

function Story() {
  const [currentChapter, setCurrentChapter] = useState(0);

  function handleChangeChapter(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentChapter(Number.parseInt(event.currentTarget.value));
  }

  function handleNextChapter(type: ACTION) {
    switch (type) {
      case ACTION.increment:
        setCurrentChapter((prev) => {
          if (prev === body.story.length - 1) return (prev = 0);
          return prev + 1;
        });
        break;
      case ACTION.decrement:
        setCurrentChapter((prev) => {
          if (prev === 0) return (prev = body.story.length - 1);
          return prev - 1;
        });
        break;
      default:
        return;
    }
  }

  return (
    <Styled.Main>
      <Styled.Slider>
        <IoIosArrowDropleftCircle
          onClick={() => handleNextChapter(ACTION.decrement)}
        />
        <div>
          {body.story.map((chapter, i) => (
            <label key={chapter.title}>
              <input
                type="radio"
                name="story"
                value={i}
                checked={currentChapter === i}
                onChange={(event) => handleChangeChapter(event)}
              />
            </label>
          ))}
        </div>
        <IoIosArrowDroprightCircle
          onClick={() => handleNextChapter(ACTION.increment)}
        />
      </Styled.Slider>
      <Styled.Text>
        <h2>{body.story[currentChapter].title}</h2>
        <p>{body.story[currentChapter].description}</p>
      </Styled.Text>
    </Styled.Main>
  );
}

export default StoryPage;
