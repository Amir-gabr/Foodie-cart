//
//
//
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Cart({ cart }) {
  //
  const { userCarts, isLoading } = cart?.cartData;
  console.log(userCarts);

  return (
    <div className="p-3 w-[20vw] space-y-5">
      <h3 className=" text-2xl font-bold">Cart Items</h3>
      <div className="flex flex-col gap-2 overflow-y-auto h-[60vh] ">
        {cart &&
          userCarts?.userCarts?.map((item, index) => (
            <div key={index} className="flex gap-2">
              <Image
                src={item?.productImage}
                alt={item?.productName}
                width={100}
                height={100}
                className="w-14 h-14 object-cover rounded-lg"
              />
              <div className="">
                <p className="">{item?.productName}</p>
                <p className="text-sm">
                  <span className="font-bold text-lg text-primary">
                  {item?.price}
                  </span>{" "} 
                  SAR
                </p>
              </div>
            </div>
          ))}
      </div>
      <Button className="w-full text-white outline-none">Checkout</Button>
    </div>
    // <div className="flex items-center space-x-4 ">
    //   <Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
    //   <div className="space-y-2">
    //     <Skeleton className="h-4 w-[250px] bg-gray-200" />
    //     <Skeleton className="h-4 w-[200px] bg-gray-200" />
    //   </div>
    // </div>
  );
}
