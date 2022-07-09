import React from "react";
import StandardPageLayout from "../layouts/StandardPageLayout/StandardPageLayout";
import MovieList from "../../components/MovieList/MovieList";
import { useRouter } from "next/router";
import {
  formatDirectorFromUrl,
  formatDirectorToUrl,
} from "../../utilities/functions";
import { RiMovie2Line } from "react-icons/ri";
import body from "../../content/mockAPI.json";
import Image from "next/image";
import * as Styled from "./styles";
import { getDateItalianFormat } from "../../utilities/functions";

function DirectorsPage() {
  const router = useRouter();
  const { director } = router.query;
  const currentDirector = formatDirectorFromUrl(director);

  const directorFound = body.directors.find(
    (director) => director.name.latin === currentDirector
  );

  return (
    <StandardPageLayout
      cover={directorFound?.banner || ""}
      title={currentDirector}
      mainContent={
        directorFound && (
          <DirectorStory currentDirector={directorFound}></DirectorStory>
        )
      }
      sideContent={<MovieList />}
    >
      <RiMovie2Line />
    </StandardPageLayout>
  );
}

type DirectorStoryProps = {
  currentDirector: {
    name: {
      latin: string;
      kanji: string;
    };
    birth: {
      date: string;
      location: string;
    };
    photo: string;
    banner: string;
    description: string;
    death?: {
      date: string;
      location: string;
    };
  };
};

function DirectorStory(props: DirectorStoryProps) {
  const { currentDirector } = props;
  const router = useRouter();

  const date = currentDirector.death
    ? `${currentDirector.birth.location}, ${getDateItalianFormat(
        currentDirector.birth.date
      )} - ${currentDirector.death.location}, ${getDateItalianFormat(
        currentDirector.death.date
      )}`
    : `${currentDirector.birth.location}, ${getDateItalianFormat(
        currentDirector.birth.date
      )}`;

  return (
    <>
      <Styled.DirectorFilter>
        {body.directors.map((director) => (
          <Styled.DirectorButton
            type="button"
            key={director.name.latin}
            backgroundColor={director.color}
            value={director.name.latin}
            onClick={() =>
              router.push(
                `/registi/${formatDirectorToUrl(director.name.latin)}`
              )
            }
          >
            {director.name.latin}
          </Styled.DirectorButton>
        ))}
      </Styled.DirectorFilter>
      <Styled.Main director={currentDirector.name.latin}>
        <div className="image">
          <Image
            src={currentDirector.photo}
            alt={currentDirector.name.latin}
            layout="fill"
          />
        </div>
        <div className="biography">
          <div className="info">
            <div className="title">
              <h2>{currentDirector.name.latin}</h2>
              <h3>{currentDirector.name.kanji}</h3>
            </div>
            <h4>{date}</h4>
          </div>
          <p>{currentDirector.description}</p>
        </div>
      </Styled.Main>
    </>
  );
}

export default DirectorsPage;
