import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-noto font-semibold">
        <NavBar></NavBar>
      </div>
      <div className="font-noto font-semibold">
        <Component {...pageProps} />
      </div>
      <div className="font-noto font-semibold">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;