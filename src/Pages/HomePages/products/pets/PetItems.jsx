
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

import { MdPets } from "react-icons/md";
const PetItems = () => {
     const [petItems, setPetItems] = useState([]);
  
    useEffect(() => {
        // Data fetching code goes here
        const fetchData = async () => {
            try {
                const response = await fetch('https://99-pro-server.vercel.app/petItems');
                const data = await response.json();
                setPetItems(data)
               
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
            <div className="flex justify-center items-center gap-2 text-[#df3b6c]">
                 <h2 className="font-bold  text-center  lg:text-xl text-lg my-4 "> Pet Items</h2>
                <MdPets></MdPets>
            </div> 
             <div className = "md:w-[97%] w-full px-4 mx-auto" >
            <div className="section ">
            {
             petItems &&
                   petItems.map((product, key) => (
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

export default PetItems;