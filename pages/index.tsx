import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-start h-full">
      <Head>
        <title>Ben&apos;s Digital Garden</title>
        <meta name="description" content="Ben Cook's Digital Garden" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full max-w-screen-md px-20">
        <h1 className="text-6xl my-4">Ben&apos;s Digital Garden</h1>

        <p className="text-xl my-4">
          This is my digital garden, where I write about things that interest
          me. I&apos;m only just starting out, but check back later for more
          writing.
        </p>

        <h6 className="text-2xl mt-4">Articles:</h6>
        <ul className="text-lg mb-4">
          <li>
            <i>to be written</i>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
