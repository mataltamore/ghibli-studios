import type { NextPage } from "next";
import Head from "next/head";
import DefaultLayout from "../../templates/layouts/DefaultLayout/DefaultLayout";
import StoryPage from "../../templates/StoryPage/StoryPage";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>La Storia | Studio Ghibli</title>
        <meta name="description" content="Studio Ghibli Blog Website Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <StoryPage />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;
