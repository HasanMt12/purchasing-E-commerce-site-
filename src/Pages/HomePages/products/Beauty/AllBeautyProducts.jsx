
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";

const AllBeautyProducts = () => {
     const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        // Data fetching code goes here
        const fetchData = async () => {
            try {
                const response = await fetch('https://99-pro-server.vercel.app/beautyProducts');
                const data = await response.json();
                setAllProducts(data)
                console.log(data);
                // Update state or do something with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(allProducts)
    return (
        <div>
            <h2 className="text-bold text-center text-md my-4 text-[#9e2c52]"> Beauty Products</h2>
            <div className="lg:w-10/12 md:w-11/12 px-4 mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 px-4 ">
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
    );
};

export default AllBeautyProducts;