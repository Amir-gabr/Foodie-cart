//
"use client";
//
//

import Image from "next/image";
import React, { useEffect } from "react";
import { Clock, MapPinIcon } from "lucide-react";
import ResTabs from "../_components/ResTabs";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getResDetailsData } from "../../../redux/resDetailsSlice";
import { addToCart } from "../../../redux/addToCartSlice";

export default function ResDetails() {
  const param = usePathname();

  const dispatch = useDispatch();
  //
  const { resDetails, isLoading } = useSelector((state) => state?.resDetails);
  // console.log(resDetails);
  //
  useEffect(() => {
    dispatch(getResDetailsData(param.split("/")[2]));
  }, [dispatch, param]);
  return (
    <section className="container min-h-screen py-10">
      <Image
        src={resDetails?.banner?.url}
        alt="banner"
        className="object-cover object-center w-full h-[30vh] rounded-xl"
        width={resDetails?.banner?.width}
        height={resDetails?.banner?.height}
      />
      <div className="flex flex-col gap-2 pt-3">
        <h2 className="text-3xl font-bold text-primary">{resDetails?.name}</h2>
        <div className="flex items-center gap-2">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="h-5 w-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
          </svg>
          <p className="text-gray-400 mt-2 md:text-base text-[12px]">4.5 (35k)</p>
        </div>
        <p className="text-gray-500 md:text-base text-[12px]">
          <Clock className="inline mr-2 md:w-6 md:h-6 w-4 h-4" />
          {resDetails?.workingHours}
        </p>
        <p className="text-gray-500 md:text-base text-[12px]">
          <MapPinIcon className="inline mr-2 md:w-6 md:h-6 w-4 h-4" />
          {resDetails?.address}
        </p>
      </div>
      <div className="mt-10">
        <ResTabs />
      </div>
    </section>
  );
}
