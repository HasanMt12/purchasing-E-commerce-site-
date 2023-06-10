
import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
 import {  MdOutlineShoppingCart } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
const ProductsSection = () => {
      const [allProducts, setAllProducts] = useState([]);
    const [limit] = useState(4)
    useEffect(() => {
        // Data fetching code goes here
        const fetchData = async () => {
            try {
                const response = await fetch('https://99-pro-server.vercel.app/allProducts');
                const data = await response.json();
                setAllProducts(data)
               
                // Update state or do something with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

      useEffect(()=>{
    Aos.init({duration:1200})
  },[])
    return (
         <div>
            <div className="flex justify-center items-center gap-2 text-[#df3b6c]">
                 <h2  data-aos="zoom-in" className="font-bold  text-center  lg:text-xl text-lg my-4 "> All Products</h2>
                < MdOutlineShoppingCart></ MdOutlineShoppingCart>
            </div> 
              <div className="section">
            {allProducts && 
                    allProducts.slice(0, limit).map((product, key) => (
                       <ProductCard key={key} product={product}>

                       </ProductCard>
                         
                        
                    ))
                    }
        </div>
           <br></br>
            <div className="text-center py-6">
        {" "}
        {/* <div className="flex justify-center items-center">
        <Link to= {`/beautyProducts`}>
          <button 
          style={{boxShadow:"0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"}}
            className='flex text-[#EEF2F5] justify-center transition duration-200 ease-in-out transform px-6 py-2 w-30 border-b-4 border-[#df81a5]  bg-gradient-to-t from-[#cc5a86]  via-[#EA0F62] to-[#e2a1ba] rounded-2xl hover:translate-y-px '>
            See More
          </button>
        </Link>
        </div> */}
      
      </div>
        </div>
    );
};

export default ProductsSection;