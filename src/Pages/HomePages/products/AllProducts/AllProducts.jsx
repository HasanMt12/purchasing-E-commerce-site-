
import { useEffect, useState } from "react";

import ProductCard from "../ProductCard";
 import {  MdOutlineShoppingCart } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const AllProducts = () => {
      const [allProducts, setAllProducts] = useState([]);
   
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
                    allProducts.map((product, key) => (
                       <ProductCard key={key} product={product}>

                       </ProductCard>
                         
                        
                    ))
                    }
        </div>
           
        </div>
    );
};

export default AllProducts;