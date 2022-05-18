import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <div className="flex justify-center h-16 mt-auto">
    <footer className="flex grow justify-center items-center max-w-screen-md border-t">
      <p>© 2022 Ben Cook</p>
      <div className="flex justify-center items-center ml-auto">
        <Link href="https://twitter.com/regularbenjamin">
          <a className="mr-3">
            <Image src="/twitter.svg" alt="me" width="20" height="20" />
          </a>
        </Link>
        <Link href="https://github.com/ben-cook">
          <a>
            <Image src="/github.svg" alt="me" width="20" height="20" />
          </a>
        </Link>
      </div>
    </footer>
  </div>
);
