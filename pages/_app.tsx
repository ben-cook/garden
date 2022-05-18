import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="flex h-full w-full justify-center">
    <div
      className="flex flex-col min-h-screen w-full"
      style={{ maxWidth: "90vw" }}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </div>
);

export default MyApp;
