//
//
"use client";
//
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRightCircle, ArrowLeftCircle } from "lucide-react";
import { getCategoriesData } from "../redux/categoriesSlice";

export default function CategorySlider() {
  const params = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  //
  const dispatch = useDispatch();
  //
  const data = useSelector((state) => state?.categories?.categories);
  //
  // console.log(data);
  //
  useEffect(() => {
    dispatch(getCategoriesData());
    setSelectedCategory(params.get("category"));
    // console.log(params.get("category"));
  }, [dispatch, params]);
  //
  //those are functions for react slick
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <>
        <ArrowRightCircle
          onClick={onClick}
          className="absolute -right-5 top-1/2 -translate-y-1/2 bg-primary text-white h-8 w-8 rounded-full cursor-pointer"
        />
      </>
    );
  }
  //
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <>
        <ArrowLeftCircle
          onClick={onClick}
          className="absolute -left-5 top-1/2 -translate-y-1/2 bg-primary text-white h-8 w-8 rounded-full cursor-pointer"
        />
      </>
    );
  }
  //
  let settings = {
    dots: false,
    arrows: true,
    touchMove: true,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: true,
          touchMove: true,
          infinite: false,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: false,
          arrows: true,
          touchMove: true,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true,
          touchMove: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          arrows: true,
          touchMove: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          touchMove: true,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <section className="w-full relative">
      <div className="slider-container px-8 sm:px-6 lg:px-8">
        <Slider {...settings} className="ps-6 lg:pe-4">
          {data &&
            data?.map((category) => (
              <Link href={`?category=` + category?.slug} key={category?.id}>
                <div className="pe-6">
                  <div
                    className={`${
                      selectedCategory == category?.slug
                        ? "border-primary bg-red-100"
                        : ""
                    } flex flex-col items-center justify-between gap-3 p-3 min-w-28 border rounded-lg group hover:border-primary hover:bg-red-100 hover:text-primary hover:duration-300 cursor-pointer`}
                  >
                    <div className="w-12 h-12">
                      <Image
                        className="group-hover:scale-125 duration-300 mx-auto"
                        src={category?.icon?.url}
                        width={category?.icon?.width}
                        height={category?.icon?.height}
                        alt="foodie cart logo"
                      />
                    </div>
                    <h4
                      className={`${
                        selectedCategory == category?.slug
                          ? "text-primary"
                          : "text-slate-800"
                      } group-hover:text-primary text-lg  text-center font-medium duration-300`}
                    >
                      {category?.name}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
        </Slider>
      </div>
    </section>
  );
}
