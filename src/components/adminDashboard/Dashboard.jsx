import { useState } from "react";

import { IoIosArrowForward} from "react-icons/io";
import ProductAction from "./ProductAction";
import AllUsers from "./Allusers";
import PaymentInvoice from "./PaymentInvoice";
const Dashboard = () => {

        const [openTab, setOpenTab] = useState(1);
    return (
        <div className="flex justify-center items-start ">
            <div className="lg:w-[15%] hidden lg:block h-full">
                <ul className="flex  mb-0 list-none flex-wrap pt-3 pb-4 flex-col">
            
            <li onClick={e => {e.preventDefault(); setOpenTab(1); }}
             className = {"cursor-pointer    mx-6 my-3 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 1
                    ? "   text-sm text-[#EA0F62]"
                    : "  text-sm text-[#686063] ")}>
              <h2>Users</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
            <li onClick={e => {e.preventDefault(); setOpenTab(2); }}
             className = {"cursor-pointer    mx-6 my-3 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 2
                    ? "   text-sm text-[#EA0F62]"
                    : "  text-sm text-[#686063]")}>
              <h2>product action</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
             <li onClick={e => {e.preventDefault(); setOpenTab(3); }}
             className = {"cursor-pointer    mx-6 my-3 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start gap-4 items-center "+
                (openTab === 3
                    ? "   text-sm text-[#EA0F62]"
                    : "  text-sm text-[#686063] ")}>
              <h2>Payment</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
           
          </ul>
            </div>
            <div className="lg:w-[85%] w-[98%] shadow-md">
                <div className=" lg:hidden block">
               <ul className="flex md:gap-2  mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
            
            <li onClick={e => {e.preventDefault(); setOpenTab(1); }}
             className = {"cursor-pointer md:mx-2 sm:mx- md:my-4 my-2 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start  items-center "+
                (openTab === 1
                    ? "md:text-md text-xs text-[#EA0F62]"
                    : "md:text-md text-xs text-[#686063] ")}>
              <h2>All user</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
            <li onClick={e => {e.preventDefault(); setOpenTab(2); }}
             className = {"cursor-pointer md:mx-2 sm:mx-1 md:my-4 my-2 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start  items-center "+
                (openTab === 2
                    ? " md:text-md text-xs text-[#EA0F62]"
                    : "md:text-md text-xs text-[#686063]")}>
              <h2>product action</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
            
             <li onClick={e => {e.preventDefault(); setOpenTab(3); }}
             className = {"cursor-pointer md:mx-2 sm:mx-1 md:my-4 my-2 font-semibold  uppercase hover:text-[#EA0F62]  text-start flex justify-start  items-center "+
                (openTab === 3
                    ? " md:text-md text-xs text-[#EA0F62]"
                    : "md:text-md text-xs text-[#686063] ")}>
              <h2>Payment Product</h2><IoIosArrowForward></IoIosArrowForward>
            </li>
          
          </ul>
            </div>  
                   <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div> 
                 <AllUsers></AllUsers>
               </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <ProductAction></ProductAction>
                </div>
                 <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <PaymentInvoice></PaymentInvoice>
                </div>
               
           
              </div>
            </div>
          </div>
             
            </div>

        </div>
    );
};

export default Dashboard;