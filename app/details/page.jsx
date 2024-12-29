//
//
"use client";
//
// import Link from "next/link";
// import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResDetailsData } from "../redux/resDetailsSlice";

export default function ResDetails() {
  const params = useSearchParams();
  const [category, setCategory] = useState("all");
  //
  const dispatch = useDispatch();
  //
  const details = useSelector((state) => state?.details);
  console.log(details);
  //
  useEffect(() => {
    dispatch(getResDetailsData(params.get("category")));
    params && setCategory(params.get("category"));
  }, [dispatch, params]);
  return <section className="">getResDetailsData</section>;
}
