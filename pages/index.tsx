import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-start h-full">
      <Head>
        <title>Ben&apos;s Digital Garden</title>
        <meta name="description" content="Ben Cook's Digital Garden" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full max-w-screen-md">
        <h1 className="text-6xl my-4">Ben&apos;s Digital Garden</h1>

        <p className="text-xl my-4">
          This is my digital garden, where I write about things that interest
          me. I&apos;m only just starting out, but check back later for more
          writing.
        </p>

        <h6 className="text-2xl mt-4">Articles:</h6>
        <ul className="text-lg mb-4">
          <li>
            <Link href="/programming_language">
              <a>
                <p>How to write your own programming language</p>
              </a>
            </Link>
          </li>
          <li>
            <i>to be written</i>
          </li>
        </ul>

        <h6 className="text-2xl mt-4">Inspiration:</h6>
        <ul className="text-lg mb-4 list-disc">
          <li>
            <a href="https://www.gwern.net/">gwern.net</a>
          </li>
          <li>
            <a href="https://tomcritchlow.com/wiki/">wikifolders</a>
          </li>
          <li>
            <a href="https://twitter.com/Mappletons/status/1250532315459194880">
              this list
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
