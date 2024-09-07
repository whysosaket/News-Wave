import { Button } from "@/components/ui/button";
import AnimatedNewsTab from "@/components/News/AnimatedNewsTable";
import FilterComponent from "@/components/News/FilterComponent";
import { useState } from "react";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

const News = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <>
      <Button onClick={()=> setIsFilter(!isFilter)} className="md:hidden hover:bg-gray-200 bg-white rounded-full text-black w-14 h-14 fixed bottom-2 right-2">
        {
          isFilter?<MdFilterAltOff size={30}/>:<MdFilterAlt size={30}/>
        }
      </Button>
      <div className="container mx-auto md:min-h-screen px-8 md:p-8 antialiased flex flex-col-reverse md:flex-row justify-center align-middle">
        <div className="md:w-2/3">
          {/* <NewsItem /> */}
          {/* <NewsItem /> */}
          {/* <NewsItem /> */}
          <AnimatedNewsTab />
        </div>
        <div className="md:w-1/3 md:px-10 mb-6 mt-6 md:mb-0 md:mt-0">
          <div className="w-full md:flex justify-end hidden">
            <Button onClick={() => setIsFilter(!isFilter)} variant={"outline"} className="mb-5" >
            Toggle Filters
            </Button>
          </div>
          {
            isFilter ? (
              <FilterComponent />
            ) : (
              null
            )
          }
          
        </div>
      </div>
    </>
  );
};

export default News;
