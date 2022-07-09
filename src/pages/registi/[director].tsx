import type { NextPage } from "next";
import Head from "next/head";
import DefaultLayout from "../../templates/layouts/DefaultLayout/DefaultLayout";
import DirectorsPage from "../../templates/DirectorsPage/DirectorsPage";
import { useRouter } from "next/router";
import { formatDirectorUrl } from "../../utilities/functions";

const IndexPage: NextPage = () => {
  const router = useRouter();
  const { director } = router.query;
  const currentDirector = formatDirectorUrl(director);

  return (
    <>
      <Head>
        <title>{currentDirector} | Studio Ghibli</title>
        <meta name="description" content="Studio Ghibli Blog Website Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <DirectorsPage />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;
