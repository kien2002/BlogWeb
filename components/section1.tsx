import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import Spinner from "./child/spinner";
import Error from "./child/error";
import fetcher from "../lib/fetcher";
import styles from '../styles/Home.module.css'

export default function Section1() {
  const { data, isLoading, isError } = fetcher("api/trending");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  SwiperCore.use([Autoplay]);
  return (
    <div className={styles.backgroundimage}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-sans font-bold text-4xl pb-12 text-center text-gray-400">
          Trending
        </h1>
        <Swiper autoplay={{ delay: 2000 }} loop={true} slidesPerView={1}>
          {data.map((value: any, index: any) => (
            <SwiperSlide key={index}>
              <Slide data={value}></Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
function Slide({ data }: any) {
  const { id, title, category, img, published, description, author } = data;
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
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
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-orange-600 hover:text-orange-800">{category}</a>
          </Link>
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">- {published}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>
        <p className="text-gray-600 py-3">{description}</p>
        { author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
