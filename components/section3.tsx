import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Author from "./child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./child/spinner";
import Error from "./child/error";

function Section3() {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">MOST POPULAR</h1>
      <Swiper autoplay={{ delay: 2000 }} loop={true} slidesPerView={2}>
        {data.map((value: any, index: any) => (
          <SwiperSlide key={index}>
            <Slide data={value}></Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
function Slide({data}:any) {
  const { id, title, category, img, published, description, author } = data;
  return (
    <div className="grid md:grid-cols-2 ml-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || "/"}
            alt={""}
            width={300}
            height={300}
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
        <p className="text-gray-600 py-3 text-sm">
          {description}
        </p>
        { author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
export default Section3;
