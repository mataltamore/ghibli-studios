import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../templates/HomePage/HomePage";
import DefaultLayout from "../templates/layouts/DefaultLayout/DefaultLayout";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Studio Ghibli</title>
        <meta name="description" content="Studio Ghibli Blog Website Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;
