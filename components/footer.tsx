import Link from "next/link";
import React from "react";
import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";
import Newlater from "./newslater";

function Footer() {
  return (
    <footer className="bg-gray-100">
      <Newlater></Newlater>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href=""> <ImFacebook2 color="#888888" /> </Link>
            <Link href=""> <ImTwitter color="#888888" /> </Link>
            <Link href=""> <ImYoutube color="#888888" /> </Link>
          </div>
          <p className="py-5 text-gray-400">Copyright @2023 Allright</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
