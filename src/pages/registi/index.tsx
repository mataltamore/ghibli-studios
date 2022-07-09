import type { NextPage } from "next";
import Head from "next/head";
import DefaultLayout from "../../templates/layouts/DefaultLayout/DefaultLayout";
import DirectorsPage from "../../templates/DirectorsPage/DirectorsPage";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Registi | Studio Ghibli</title>
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
