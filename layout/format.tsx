import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function Format({children}:any) {
  return (
    <>
    <Head>
        <title>Blog</title>
    </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}

export default Format;
