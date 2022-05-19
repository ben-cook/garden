import { readdirSync, lstatSync, readFileSync } from "fs";
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
      let metadata = parseMetadata(String(contents));

      return {
        slug: file.slice(0, file.length - ".tsx".length),
        title: `A title could not be found in ${file}`,
        ...metadata,
      };
    });

  return posts;
};

const parseMetadata = (input: string): Record<string, string> => {
  const statement = String(input).match(/export const meta = \{[\s\S]+\};/);

  if (statement) {
    const object = statement[0].match(/\{[\s\S]+\}/);
    if (object) {
      const fixedObject = object[0]
        .replace(/([a-zA-Z]+):/, (_match, p1) => `"${p1}":`)
        .replace(/,[\r\n]+}$/, "}");

      try {
        return JSON.parse(fixedObject);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return {};
};
