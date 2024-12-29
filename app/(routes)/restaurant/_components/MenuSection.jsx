//
//
"use client";
//
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SquarePlus } from "lucide-react";
import { useDispatch } from 'react-redux';
import { addToCart } from './../../../redux/addToCartSlice';

export default function MenuSection({ resDetails }) {
  const dispatch = useDispatch();

  const [result, setResult] = useState([]);

  // Set the default value of result to the first category's menu items
  useEffect(() => {
    if (resDetails && resDetails?.menu && resDetails?.menu?.length > 0) {
      const firstCategory = resDetails?.menu[0]?.category;
      menuItemsFilter(firstCategory); // Initialize with the first category
    }
    dispatch(addToCart());
  }, [resDetails,dispatch]);

  // Filter the menu items based on the category
  function menuItemsFilter(category) {
    const filteredResult = resDetails?.menu?.find(
      (item) => item?.category === category
    );
    setResult(filteredResult || []); // Default to empty array if no result found
  }

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 md:col-span-3">
        {resDetails &&
          resDetails?.menu?.map((menu) => (
            <div key={menu?.id} className="mb-4">
              <Button
                className="w-full bg-gray-200 hover:bg-gray-300"
                onClick={() => menuItemsFilter(menu?.category)}
              >
                {menu?.category}
              </Button>
            </div>
          ))}
      </div>
      <div className="col-span-12 md:col-span-9">
        <h4 className="text-3xl"></h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {result?.menuItem?.map((item) => (
            <div key={item?.id} className="flex border hover:border-primary rounded-xl gap-2 p-2">
              <Image
                src={item?.image?.url}
                alt={item?.name}
                width={item?.image?.width}
                height={item?.image?.height}
                className="object-cover object-center w-[120px] h-[120px] rounded-xl text-center"
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl text-primary">{item?.name}</p>
                <p className="font-semibold ">{item?.price} SIR</p>
                <p className="line-clamp-2 text-sm text-thirdly">{item?.description}</p>
                <SquarePlus className="cursor-pointer hover:scale-110" onClick={() =>addToCart(item) } />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
