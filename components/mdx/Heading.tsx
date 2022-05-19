import { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const H1 = ({ children }: Props) => {
  return <h1 className="text-6xl my-4">{children}</h1>;
};

export const H2 = ({ children }: Props) => {
  return <h1 className="text-5xl my-4">{children}</h1>;
};

export const H3 = ({ children }: Props) => {
  return <h1 className="text-4xl my-3">{children}</h1>;
};

export const H4 = ({ children }: Props) => {
  return <h1 className="text-3xl my-2">{children}</h1>;
};

export const H5 = ({ children }: Props) => {
  return <h1 className="text-2xl my-1">{children}</h1>;
};

export const H6 = ({ children }: Props) => {
  return <h1 className="text-xl my-0.5">{children}</h1>;
};
