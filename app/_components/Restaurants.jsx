//
//
"use client"
//
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsData } from "../_utils/redux/restaurantsSlice";
import { getResDetailsData } from "../_utils/redux/resDetailsSlice";
import LoadingCards from "./LoadingCards";




export default function Restaurants() {
    const params = useSearchParams();
    const [category,setCategory] = useState("all")
    //
    const dispatch = useDispatch();
    //
    const { restaurants, isLoading } = useSelector((state) => state?.restaurants);
    console.log(restaurants);
    //
    useEffect(() => {
        dispatch(getRestaurantsData(params.get("category")));
        params&&setCategory(params.get("category"))
    }, [dispatch, params]);

    return (
        <section>
        <div className="py-10">
        <p className="text-gray-700 text-xl  md:text-2xl border-b-2 border-primary w-fit py-2 pe-6">Popular <span className="text-primary font-semibold capitalize">{category}</span> Restaurants</p>
        {isLoading ? (
            <LoadingCards />
        ) : (
            <div className="grid grid-cols-1 gap-8 py-10 mx-auto md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 lg:py-14">
            {restaurants &&
                restaurants?.map((restaurant) => (
                <Link href={`/details`} key={restaurant?.id} onClick={()=>{
                    dispatch(getResDetailsData(restaurant?.slug));
                }}>
                    <div className="group shadow-lg w-full p-3 border rounded-lg hover:bg-red-100 hover:border-primary hover:text-primary hover:duration-300 cursor-pointer">
                        <div className="w-full h-44">
                            <Image
                                className="object-cover object-center w-full h-full"
                                src={restaurant?.banner?.url}
                                alt={restaurant?.name}
                                width={restaurant?.banner?.width}
                                height={restaurant?.banner?.height}
                            />
                        </div>
                        <div className="flex flex-col gap-3 pt-3">
                            <h5 className="text-xl font-semibold text-gray-700 group-hover:text-primary">{restaurant?.name}</h5>
                            <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="h-5 w-5 text-yellow-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                                </svg>
                                <p className="text-gray-400 mt-2">4.5</p>
                                <p className="text-primary text-xs mt-2">{restaurant?.categories[1]?.name}</p>
                            </div>
                            <p className="text-gray-400 capitalize mt-2">{restaurant?.restaurantType}</p>
                            </div>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
            )}
        </div>
    </section>
    );
}
