import Head from "next/head";
import Login from "./auth/Login";
import Header from "./header/Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="w-full lg:max-w-7xl mx-auto">{children}</main>
    </>
  );
}

export default Layout;
