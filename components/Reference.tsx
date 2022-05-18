import Link from "next/link";

type Props = {
  id: number;
  text: string;
  side: "right" | "left";
};

export const Reference = ({ id, text, side }: Props) => (
  <>
    <sup>
      <Link href={`/ref${id}`}>
        <a className="mx-0.5">[{id}]</a>
      </Link>
    </sup>

    <span
      id={`aside${id}`}
      className="text-gray-500 w-1/2 max-w-sm absolute block -mt-6 right-0 border-y -mx-6 px-2"
      style={
        side == "right"
          ? {
              transform: `translateX(100%)`,
              right: 0,
            }
          : {
              transform: `translateX(-100%)`,
              left: 0,
            }
      }
    >
      {text}
    </span>
  </>
);
