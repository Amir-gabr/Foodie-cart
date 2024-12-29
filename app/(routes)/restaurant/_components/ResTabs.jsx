//
//
"use client";
//
import MenuSection from "./MenuSection";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResDetailsData } from "../../../redux/resDetailsSlice";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../../src/components/ui/tabs";

export default function ResTabs() {
  const dispatch = useDispatch();
  const { resDetails } = useSelector((state) => state?.resDetails);
  // console.log(resDetails.aboutUs);
  useEffect(() => {
    dispatch(getResDetailsData());
  }, [dispatch]);

  return (
    <Tabs className="flex flex-col" defaultValue="tab1">
      <TabsList className="flex items-center justify-between w-[30vw] rounded-md bg-gray-200 p-[6px]">
        <TabsTrigger
          className="flex h-[36px] w-[200px] flex-1 cursor-pointer items-center justify-center rounded-md data-[state=active]:bg-white px-5 text-[15px] "
          value="tab1"
        >
          Categories
        </TabsTrigger>
        <TabsTrigger
          className="flex h-[36px] w-[200px] flex-1 cursor-pointer items-center justify-center rounded-md data-[state=active]:bg-white px-5 text-[15px] "
          value="tab2"
        >
          about
        </TabsTrigger>
        <TabsTrigger
          className="flex h-[36px] w-[200px] flex-1 cursor-pointer items-center justify-center rounded-md data-[state=active]:bg-white px-5 text-[15px] "
          value="tab3"
        >
          Review
        </TabsTrigger>
      </TabsList>
      <TabsContent className="grow rounded-b-md bg-white py-5" value="tab1">
        <MenuSection resDetails={resDetails} />
      </TabsContent>
      <TabsContent className="grow rounded-b-md bg-white p-5" value="tab2">
        <p className="mb-5 text-[15px] leading-normal text-mauve11">
          {resDetails?.aboutUs}
        </p>
      </TabsContent>
      <TabsContent className="grow rounded-b-md bg-white p-5" value="tab3">
        <p className="mb-5 text-[15px] leading-normal text-mauve11">
          Change your password here. After saving, be logged out.
        </p>
      </TabsContent>
    </Tabs>
  );
}
