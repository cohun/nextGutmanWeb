import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="lifting, lashing, material handling, crane, chain, polyester, wire rope"
        />
        <meta name="author" content="Attila Horvath" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
