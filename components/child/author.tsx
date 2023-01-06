import React from "react";
import Image from "next/image";
import Link from "next/link";
function Author() {
  return (
    <div className="author flex py-5">
      <Image
        src={"/image/author.png"}
        alt={""}
        className="rounded-full"
        width={50}
        height={50}
      ></Image>
      <div className="flex flex-col justify-center py-4">
        <Link href={"/"} legacyBehavior>
          <a className="text-sm font-bold text-gray-700 hover:text-gray-600 ml-2 ">Paimon</a>
        </Link>
        {/* <span className="text-left text-gray-500">ADMIN</span> */}
      </div>
    </div>
  );
}

export default Author;
