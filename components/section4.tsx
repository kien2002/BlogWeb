import Link from "next/link";
import React from "react";
import Image from "next/image";
import Author from "./child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./child/spinner";
import Error from "./child/error";

function Section4() {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">ABU</h1>
          <div className="flex flex-col gap-6">
            {data[1] ? <Post data={data[1]}></Post> : <></>}
            {data[2] ? <Post data={data[2]}></Post> : <></>}
            {data[3] ? <Post data={data[3]}></Post> : <></>}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">WIBU</h1>
          <div className="flex flex-col gap-6">
            {data[4] ? <Post data={data[4]}></Post> : <></>}
            {data[5] ? <Post data={data[5]}></Post> : <></>}
            {data[2] ? <Post data={data[2]}></Post> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
}
function Post({ data }: any) {
  const { id, title, category, img, published, description, author } = data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image
           src={img || "/"}
            alt={""}
            width={300}
            height={250}
            className="rounded-3xl"
          ></Image>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-orange-600 hover:text-orange-800">
             {category}
            </a>
          </Link>
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">- {published}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>
        { author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}

export default Section4;
