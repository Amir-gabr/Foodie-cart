//
//
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../../src/components/ui/tabs";

export default function MenuTabs({resDetails}) {
  return (
    <Tabs className="flex flex-col" defaultValue="tab1">
      <TabsList className="flex items-center justify-between rounded-md bg-gray-200 p-2">
        <TabsTrigger
          className="flex h-[45px] w-[200px] flex-1 cursor-pointer items-center justify-center rounded-md data-[state=active]:bg-white px-5 text-[15px] "
          value="tab1"
        >
          Categories
        </TabsTrigger>
        <TabsTrigger
          className="flex h-[45px] w-[200px] flex-1 cursor-pointer items-center justify-center rounded-md data-[state=active]:bg-white px-5 text-[15px] "
          value="tab2"
        >
          about
        </TabsTrigger>
        <TabsTrigger
          className="flex h-[45px] w-[200px] flex-1 cursor-pointer items-center justify-center rounded-md data-[state=active]:bg-white px-5 text-[15px] "
          value="tab3"
        >
          Review
        </TabsTrigger>
      </TabsList>
      <TabsContent className="grow rounded-b-md bg-white py-5" value="tab1">
      </TabsContent>
      <TabsContent className="grow rounded-b-md bg-white p-5" value="tab2">
        <p className="mb-5 text-[15px] leading-normal text-mauve11">
  
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
