import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <div className="flex justify-center h-20">
    <header className="flex grow items-center max-w-screen-md">
      <Link href={"/"}>
        <a className="flex justify-between items-center">
          <Image
            src="/favicon-32x32.png"
            alt=""
            layout="fixed"
            width="24rem"
            height="24rem"
          />
          <span className="font-semibold ml-2">Ben Cook</span>
        </a>
      </Link>
    </header>
  </div>
);
