import React from "react";
import StandardPageLayout from "../layouts/StandardPageLayout/StandardPageLayout";
import MovieList from "../../components/MovieList/MovieList";
import { useRouter } from "next/router";
import { formatDirectorUrl } from "../../utilities/functions";
import { RiMovie2Line } from "react-icons/ri";
import body from "../../content/DirectorPage.json";

function DirectorsPage() {
  const router = useRouter();
  const { director } = router.query;
  const currentDirector = formatDirectorUrl(director);

  const directorFound = body.directors.find(
    (director) => director.name.latin === currentDirector
  );

  return (
    <StandardPageLayout
      cover={directorFound?.banner || ""}
      title={currentDirector}
      mainContent={<div></div>}
      sideContent={<MovieList />}
    >
      <RiMovie2Line />
    </StandardPageLayout>
  );
}

export default DirectorsPage;
