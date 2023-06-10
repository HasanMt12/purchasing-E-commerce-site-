import { useEffect, useState } from "react";
import Hero from "./Hero";
import ProductsSection from "./products/ProductsSection";
import AllBeautyProducts from "./products/Beauty/AllBeautyProducts";
import AllGadgets from "./products/gadgetsProduct/AllGadgets";
import AllBabyProduct from "./products/AllProducts/BabyProduct/AllBabyProduct";
import "aos/dist/aos.css";
import { IoIosArrowForward} from "react-icons/io";
import PetItems from "./products/pets/petItems";
import Gadgets from "./products/gadgetsProduct/Gadets";
import Aos from "aos";
const Home = () => {
    const [openTab, setOpenTab] = useState(1);
    useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    return (
        <>
        <div className="flex justify-center items-start ">
            <div  className="lg:w-[15%] hidden lg:block h-full">
                <ul  className="flex  mb-0 list-none flex-wrap pt-3 pb-4 flex-col">
            
            <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(1); }}
             className = {"cursor-pointer    mx-6 my-3 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 1
                    ? "   text-sm text-[#EA0F62]"
                    : "  text-sm text-[#686063] ")}>
              <h2>All product</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
            <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(2); }}
             className = {"cursor-pointer    mx-6 my-3 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 2
                    ? "   text-sm text-[#EA0F62]"
                    : "  text-sm text-[#686063]")}>
              <h2>Beauty Products</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
             <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(3); }}
             className = {"cursor-pointer    mx-6 my-3 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 3
                    ? "   text-sm text-[#EA0F62]"
                    : "  text-sm text-[#686063] ")}>
              <h2>Home And Kitchen</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
           <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(4); }}
             className = {"cursor-pointer    mx-6 my-3 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 4
                    ? "   text-sm text-[#EA0F62]"
                    : "  text-sm text-[#686063] ")}>
              <h2>Baby Product</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
             <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(5); }}
             className = {"cursor-pointer    mx-6 my-3 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 5
                    ? "   text-sm text-[#EA0F62]"
                    : "  text-sm text-[#686063] ")}>
              <h2>pet Items</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
            <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(6); }}
             className = {"cursor-pointer    mx-6 my-3 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 6
                    ? "   text-sm text-[#EA0F62]"
                    : "  text-sm text-[#686063] ")}>
              <h2>Gadgets </h2><IoIosArrowForward></IoIosArrowForward>
            </li>
          </ul>
            </div>
            <div className="lg:w-[85%] w-[98%] shadow-md">
                <div className=" lg:hidden block">
               <ul className="flex md:gap-2 ml-2 mb-0 list-none flex-wrap pt-2 flex-row">
            
            <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(1); }}
             className = {"cursor-pointer md:mx-2 sm:mx-2   font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start  items-center "+
                (openTab === 1
                    ? "md:text-md text-xs text-[#EA0F62]"
                    : "md:text-md text-xs text-[#686063] ")}>
              <h2>Home</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
            <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(2); }}
             className = {"cursor-pointer mx-2 sm:mx-1  font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start  items-center "+
                (openTab === 2
                    ? " md:text-md text-xs text-[#EA0F62]"
                    : "md:text-md text-xs text-[#686063]")}>
              <h2>Beauty Products</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
            
             <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(3); }}
             className = {"cursor-pointer mx-2 sm:mx-1  font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start  items-center "+
                (openTab === 3
                    ? " md:text-md text-xs text-[#EA0F62]"
                    : "md:text-md text-xs text-[#686063] ")}>
              <h2>Home And Kitchen</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
           <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(4); }}
             className = {"cursor-pointer mx-2 sm:mx-1  font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start  items-center "+
                (openTab === 4
                    ? " md:text-md text-xs text-[#EA0F62]"
                    : "md:text-md text-xs text-[#686063] ")}>
              <h2>Baby Product</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
             <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(5); }}
             className = {"cursor-pointer    mx-2  font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 5
                    ? "   text-xs text-[#EA0F62]"
                    : "  text-xs text-[#686063] ")}>
              <h2>pet Items</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
            <li data-aos="fade-right" onClick={e => {e.preventDefault(); setOpenTab(6); }}
             className = {"cursor-pointer my-1   mx-2 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 6
                    ? "   text-xs text-[#EA0F62]"
                    : "  text-xs text-[#686063] ")}>
              <h2>Gadgets</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
          </ul>
            </div>  
                   <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 ">
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
                <div className={openTab === 5 ? "block" : "hidden"} id="link2">
                    <PetItems></PetItems>
                </div>
                 <div className={openTab === 6 ? "block" : "hidden"} id="link2">
                    <Gadgets></Gadgets>
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