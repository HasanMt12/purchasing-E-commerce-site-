
import Loader from "../../../../components/Shared/Loader";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";

const AllBeautyProducts = () => {
     const [allProducts, setAllProducts] = useState([]);
       const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Data fetching code goes here
        const fetchData = async () => {
            try {
                  setIsLoading(true);
                const response = await fetch('https://99-pro-server.vercel.app/beautyProducts');
                const data = await response.json();
                setAllProducts(data)
                  setIsLoading(false);
              
                // Update state or do something with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
                  setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    console.log(allProducts)
    return (
        <>
        {
                isLoading ? (
                    <Loader></Loader>
                ):(

                    <div>
            <h2 className="font-bold  text-center  lg:text-xl text-lg my-4 text-[#df3b6c]"> Beauty Products</h2>
            <div className="w-[97%] px-4 mx-auto">
            <div className="section ">
            {
             allProducts &&
                   allProducts.map((product, key) => (
                       <ProductCard key={key} product={product}>

                       </ProductCard>
                         
                        
                    ))
                    }
                    </div>
                    </div>
        </div>
                )
            }
            </>
    );
};

export default AllBeautyProducts;