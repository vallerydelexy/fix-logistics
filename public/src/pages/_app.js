import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react";
// import { trpc } from "../common/trpc";
import { useEffect } from "react";
import Footer from "../components/footer";
import dynamic from "next/dynamic";
import TawkTo from "tawkto-react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Navbar = dynamic(() => import("../components/navbar"), {
    ssr: false,
  });
  useEffect(() => {
    var tawk = new TawkTo("63fb069431ebfa0fe7ef5de4", "1gq693du7");
    tawk.onStatusChange((status) => console.log(status));
    var removeBranding = function () {
      try {
        var element = document
          ?.querySelector(".tawk-max-container")
          ?.querySelector(".tawk-branding")?.parentElement;

        if (element) {
          element.remove();
        }
      } catch (e) {}
    };

    var tick = 100;

    setInterval(removeBranding, tick);
  }, []);
  return (
    <>
      <Navbar />
      <main className="max-w-8xl mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
