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
      className="text-gray-500 w-2/3 max-w-sm absolute block -mt-8 -mx-10 pt-8"
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
      <a
        className="flex justify-center items-center border-x border-t absolute top-0 h-8 w-8"
        style={
          side == "right"
            ? {
                left: 0,
              }
            : {
                right: 0,
              }
        }
      >
        {id}
      </a>
      <span className="border-y relative block p-2">{text}</span>
    </span>
  </>
);
