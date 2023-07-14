import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
});

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <link rel="stylesheet" />
      </Head>
      <div
        className={`${noto.variable} font-noto min-h-screen flex flex-col justify-between`}
      >
        <div className="">
          <NavBar></NavBar>
        </div>
        <div className="">
          <Component {...pageProps} />
        </div>
        <div className="">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
