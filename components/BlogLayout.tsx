import { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { H1, H2, H3, H4, H5, H6 } from "./mdx/Heading";
import { MDXComponents } from "mdx/types";
import { Reference } from "./Reference";
import { Paragraph } from "./mdx/Paragraph";
import { MDXLink } from "./mdx/Link";

type Props = {
  children: ReactNode;
};

const components: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  a: MDXLink,
  Reference: Reference,
};

export const BlogLayout = ({ children }: Props) => (
  <div className="flex justify-center items-start h-full w-full">
    <main className="flex flex-col h-full max-w-prose relative">
      <MDXProvider components={components}>{children}</MDXProvider>
    </main>
  </div>
);
