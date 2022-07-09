import React from "react";
import StandardPageLayout from "../layouts/StandardPageLayout/StandardPageLayout";
import MovieList from "../../components/MovieList/MovieList";
import { useRouter } from "next/router";
import {
  formatDirectorFromUrl,
  formatDirectorToUrl,
} from "../../utilities/functions";
import { RiMovie2Line } from "react-icons/ri";
import body from "../../content/DirectorPage.json";
import body2 from "../../content/MoviesPage.json";
import Image from "next/image";
import * as Styled from "./styles";

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

  return (
    <Styled.DirectorFilter>
      <div>
        {body2.directors.map((director) => (
          <Styled.DirectorButton
            type="button"
            key={director.name}
            backgroundColor={director.color}
            value={director.name}
            onClick={() =>
              router.push(`/registi/${formatDirectorToUrl(director.name)}`)
            }
          >
            {director.name}
          </Styled.DirectorButton>
        ))}
      </div>
      <h2>{currentDirector.name.latin}</h2>
      <Image
        src={currentDirector.photo}
        alt={currentDirector.name.latin}
        width={500}
        height={500}
      />
    </Styled.DirectorFilter>
  );
}

export default DirectorsPage;
