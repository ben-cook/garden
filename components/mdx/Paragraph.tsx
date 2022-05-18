import { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Paragraph = ({ children }: Props) => {
  return <p className="text-lg my-2">{children}</p>;
};
