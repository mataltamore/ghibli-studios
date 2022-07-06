import type { NextPage } from "next";
import Head from "next/head";
import DefaultLayout from "../../templates/DefaultLayout/DefaultLayout";
import MoviesPage from "../../templates/MoviesPage/MoviesPage";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Filmografia | Studio Ghibli</title>
        <meta name="description" content="Studio Ghibli Blog Website Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <MoviesPage />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;
