import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes, HTMLProps } from "react";

type Props = HTMLProps<HTMLAnchorElement>;

export const MDXLink = ({ children, href }: Props) => {
  if (!href) {
    return null;
  }

  return (
    <Link href={href}>
      <a className="text-lg my-2 underline">{children}</a>
    </Link>
  );
};
