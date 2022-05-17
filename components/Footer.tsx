import Image from "next/image";

export const Footer = () => (
  <div className="flex justify-center h-16 mt-auto">
    <footer className="flex grow justify-center items-center max-w-screen-md border-t">
      <p>© 2022 Ben Cook</p>
      <div className="flex justify-center items-center ml-auto">
        <a className="mr-3" href="https://twitter.com/regularbenjamin">
          <Image src="/twitter.svg" alt="me" width="20" height="20" />
        </a>
        <a href="https://github.com/ben-cook">
          <Image src="/github.svg" alt="me" width="20" height="20" />
        </a>
      </div>
    </footer>
  </div>
);
