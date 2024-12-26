//
//
//
import React from "react";
import MenuTabs from './MenuTabs';
import { Button } from "@/components/ui/button";


export default function MenuSection({resDetails}) {
  console.log(resDetails);
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-3 bg-slate-200">
        {resDetails &&
          resDetails?.menu?.map((menu) => (
            <div key={menu?.id} className="flex flex-col gap-2">
              <Button className="w-full">{menu?.category}</Button>
            </div>
          ))}
      </div>
      <div className="col-span-9 bg-slate-400">
          <MenuTabs resDetails={resDetails} />
      </div>
    </div>
  );
}