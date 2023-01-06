import Link from "next/link";
import React from "react";
import Image from "next/image";
import Author from "./child/author";
import getPost from "../lib/helper";
import Spinner from "./child/spinner";
import fetcher from "../lib/fetcher";
import Error from "./child/error";

function Section2() {
  const { data, isLoading, isError } = fetcher("api/post");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-serif font-bold text-4xl py-12 text-center">POST</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value: any, index: any) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
}
function Post({ data }: any) {
  const { id, title, category, img, published, description, author } = data;
  console.log(data);
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || "/"}
            alt={""}
            width={600}
            height={600}
            className="rounded-3xl"
          ></Image>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <Link href={`/posts/${id}`} legacyBehavior>
          <a className="text-orange-600 hover:text-orange-800">
            {category || "Unknown"}
          </a>
        </Link>
        <Link href={`/posts/${id}`} legacyBehavior>
          <a className="text-gray-600 hover:text-gray-800">
            - {published || "Unknown"}
          </a>
        </Link>
      </div>
      <div className="title">
        <Link href={`/posts/${id}`} legacyBehavior>
          <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
            {title || "Unknown"}
          </a>
        </Link>
      </div>
      <p className="text-gray-600 py-4">{description || "Unknown"}</p>
      { author ? <Author {...author}></Author> : <></>}
    </div>
  );
}
export default Section2;
