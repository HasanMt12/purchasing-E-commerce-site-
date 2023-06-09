
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";

const AllGadgets = () => {
     const [allGadgets, setAllGadgets] = useState([]);
  
    useEffect(() => {
        // Data fetching code goes here
        const fetchData = async () => {
            try {
                const response = await fetch('https://99-pro-server.vercel.app/gadgetsAndTools');
                const data = await response.json();
                setAllGadgets(data)
               
                // Update state or do something with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
     <>
           <div>
            <h2 className="font-bold  text-center  lg:text-xl text-lg my-4 text-[#df3b6c]"> Beauty Products</h2>
            <div className="md:w-[97%] w-full px-4 mx-auto">
            <div className="section ">
            {
             allGadgets &&
                   allGadgets.map((product, key) => (
                       <ProductCard key={key} product={product}>

                       </ProductCard>
                         
                        
                    ))
                    }
                    </div>
                    </div>
        </div>
     </>
    );
};

export default AllGadgets;