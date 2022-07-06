import type { NextPage } from "next";
import Head from "next/head";
import DefaultLayout from "../../templates/DefaultLayout/DefaultLayout";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Filmografia | Studio Ghibli</title>
        <meta name="description" content="Studio Ghibli Blog Website Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>Filmografia</DefaultLayout>
    </>
  );
};

export default IndexPage;
