import { useState } from "react";
import AllBeautyProducts from "../../Pages/HomePages/products/Beauty/AllBeautyProducts";
import AllGadgets from "../../Pages/HomePages/products/gadgetsProduct/AllGadgets";
import { useLocation } from "react-router-dom";
import Hero from "../../Pages/HomePages/Hero";

const CategoryNavbar = () => {
    const [openTab, setOpenTab] = useState(1);
    const {pathname} = useLocation();
    return (
        <div>
            {pathname === "/"&& (
                <Hero></Hero>
            )} 
              <div className="flex flex-wrap lg:w-10/12 mx-auto md:w-11/12 ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-[00FFFF]  bg-[#00FFFF]"
                    : "text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Beauty Products
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2 ? "text-[00FFFF]  bg-[#00FFFF]" : "text-white")  }
                onClick={e => {   e.preventDefault();setOpenTab(2);  }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              > Home And Kitchen </a>
            </li>
             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3 ? "text-[00FFFF]  bg-[#00FFFF]" : "text-white")  }
                onClick={e => {   e.preventDefault();setOpenTab(3);  }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              > Baby Items </a>
            </li>
             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4 ? "text-[00FFFF]  bg-[#00FFFF]" : "text-white")  }
                onClick={e => {   e.preventDefault();setOpenTab(4);  }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              > Pet Items </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                     <AllBeautyProducts></AllBeautyProducts>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 <AllGadgets></AllGadgets>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default CategoryNavbar;