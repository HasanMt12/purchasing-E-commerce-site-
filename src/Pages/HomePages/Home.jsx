import { useState } from "react";
import Hero from "./Hero";
import ProductsSection from "./products/ProductsSection";
import AllBeautyProducts from "./products/Beauty/AllBeautyProducts";
import AllGadgets from "./products/gadgetsProduct/AllGadgets";
import AllBabyProduct from "./products/AllProducts/BabyProduct/AllBabyProduct";


const Home = () => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <>
        <div className="flex justify-center items-start">
            <div className="lg:w-[20%] hidden lg:block">
                <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col"
            role="tablist"
          >
            
            <li className="-mb-px  mx-6 my-6 mr-2  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white lg:text-md text-sm  bg-[#82c1da]"
                    : "text-[#EA0F62]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                 Home
              </a>
            </li>
            <li className="-mb-px mr-2 mx-6 my-6  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                     ? "text-white lg:text-md text-sm  bg-[#82c1da]"
                    : "text-[#EA0F62]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Beauty Products
              </a>
            </li>
            <li className="-mb-px mr-2 mx-6 my-6 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                     ? "text-white lg:text-md text-sm  bg-[#82c1da]"
                    : "text-[#EA0F62]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Home And Kitchen
              </a>
            </li>
            <li className="-mb-px mr-2 mx-6 my-6 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                     ? "text-white lg:text-md text-sm  bg-[#82c1da]"
                    : "text-[#EA0F62]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Baby Products
              </a>
            </li>
          </ul>
            </div>
            <div className="lg:w-[80%] w-[90%]">
                <div className=" lg:hidden block">
                <ul
            className="flex mb-0 md:gap-4 gap-3 list-none flex-row pt-3 pb-4 "
            role="tablist"
          >
            
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white   bg-[#82c1da]"
                    : "text-[#EA0F62]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                 Home
              </a>
            </li>
              <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white   bg-[#82c1da]"
                    : "text-[#EA0F62]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
              Beauty Products
              </a>
            </li>
                <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white   bg-[#82c1da]"
                    : "text-[#EA0F62]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Home And Kitchen
              </a>
            </li>
             <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white   bg-[#82c1da]"
                    : "text-[#EA0F62]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Baby Products
              </a>
            </li>
          </ul>
            </div>  
                   <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <> 
                 
                <Hero></Hero>
             <ProductsSection></ProductsSection></>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                   <AllBeautyProducts></AllBeautyProducts>
                </div>
                 <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                   <AllGadgets/>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link2">
                   <AllBabyProduct/>
                </div>
           
              </div>
            </div>
          </div>
             
            </div>

        </div>
            
        </>
    );
};

export default Home;