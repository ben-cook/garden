import { readdirSync, lstatSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";

export type Post = {
  title: string;
  slug: string;
};

export const getAllPosts = (): Post[] => {
  const pagesDirectory = path.join(process.cwd(), "pages");

  const posts = readdirSync(pagesDirectory)
    .filter((file) => {
      if (["_app.tsx", "_document.tsx", "index.tsx"].includes(file))
        return false;

      const stat = lstatSync(path.join(pagesDirectory, file));
      return stat.isFile();
    })
    .map((file) => {
      const contents = readFileSync(path.join(pagesDirectory, file));
      const parsed = matter(contents);

      return {
        title: parsed?.data?.title || "A title!",
        slug: file.slice(0, file.length - ".tsx".length),
      };
    });

  return posts;
};
