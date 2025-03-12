//
//
//
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useDispatch, useSelector } from "react-redux";
import { getDisconnectRes } from "../redux/disconnectResSlice";
import { getRemovedItem } from "../redux/removeItemSlice";

export default function Cart({ cart }) {
  const dispatch = useDispatch();
  const { getToken } = useAuth();
  const disconnectedData = useSelector(
    (state) => state?.disconnectedRes?.disconnectRes
  );
  console.log("disconnectedData", disconnectedData);
  const removedData = useSelector((state) => state?.removedItem?.removeItem);
  console.log("removedData", removedData);
  //------------//
  const calcCoast = () => {
    let coast = 0;
    cart?.forEach((item) => {
      coast += item.price;
    });
    return coast;
  };
  //------------//
  const handleDisconnectRes = (id) => {
    dispatch(getDisconnectRes(id));
  };
  const handleDeleteCartItem = (id) => {
    dispatch(getRemovedItem(id));
  };
 
  
  







  return (
    <div className="p-3 w-[30vw] md:w-[30vw] lg:w-[20vw] space-y-5">
      <h3 className=" text-2xl font-bold">Cart Items</h3>
      <div className="flex flex-col gap-2 overflow-y-auto h-[60vh] ">
        {cart &&
          cart?.map((item, index) => (
            <div key={index} className="flex justify-between">
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
                  <p className="text-xs">
                    <span className="font-bold text-lg text-primary">
                      {item?.price}
                    </span>{" "}
                    SAR
                  </p>
                </div>
              </div>
              <TrashIcon
                className="cursor-pointer w-5 text-primary"
                onClick={() => {
                  handleDisconnectRes(item?.id);
                  handleDeleteCartItem(item?.id);
                }}
              />
            </div>
          ))}
      </div>
      <Button className="w-full text-white outline-none">
        Checkout {calcCoast()}
        <span className="text-[10px]">SAR</span>
      </Button>
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





// const handleDisconnectRestaurant = async (id) => {
//   try {
//     const token = await getToken(); //      
//     const data = {
//       id: id,
//       token: token, //   
//     }
//   } catch (error) {
//     console.error("Error disconnecting restaurant:", error);
//   }
//   dispatch(getDisconnectRes(data)); //
//   // dispatch(getRemovedItem(data)); // 

//   DeleteItemFromCart(id).then((res)=>console.log("res",res))
// };