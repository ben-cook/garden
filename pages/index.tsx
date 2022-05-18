import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
// import { readdirSync, lstatSync, readFileSync } from "fs";
import matter from "gray-matter";

// const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
const Home = ({}) => {
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
          {/* {posts.map(({ title, slug }) => (
            <li key={slug}>
              <Link href={`/${slug}`}>
                <a>
                  <p>{title}</p>
                </a>
              </Link>
            </li>
          ))} */}
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

type Post = {
  title: string;
  slug: string;
};

// export const getStaticProps: GetStaticProps<{ posts: Post[] }> = () => {
//   const posts = getAllPosts();

//   return {
//     props: {
//       posts
//      },
//   };
// };

// export const getAllPosts = (path: string): Post[] => {
//   if (path.slice(-1) != "/") path += "/";

//   const posts = readdirSync(path)
//     .filter((file) => {
//       if (!file.endsWith(".js")) return false;

//       if (["_app.js", "_document.js", "_error.js", "index.js"].includes(file))
//         return false;

//       // console.log(file);

//       const stat = lstatSync(path + file);
//       return stat.isFile();
//     })
//     .map((file) => {
//       // console.log(file);

//       const contents = readFileSync(path + file);
//       console.log(contents);

//       const parsed = matter(contents);

//       // console.log(parsed);

//       return {
//         title: parsed?.data?.title || "A title!",
//         slug: file.slice(0, file.length - 3),
//       };
//     });

//   return posts;
// };

export default Home;
