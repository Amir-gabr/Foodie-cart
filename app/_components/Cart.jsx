//
//
//
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Cart({ cart }) {
  //
  const { userCarts, isLoading } = cart?.cartData;
  console.log(userCarts);

  return (
    <div className="">
        <h3 className="">
        {/* {cart[0].res} */}
        </h3>
    <div className="">
        {/* {cart&&userCarts?.map((item, index) =>
            <div key={index} className="">
                <Image src={item?.image?.url} alt={item?.name} width={100} height={100} />
            </div>
        )} */}
    </div>
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
