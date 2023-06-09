import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";


const BeautyProducts = () => {

       const [allProducts, setAllProducts] = useState([]);
    const [limit] = useState(4)
    useEffect(() => {
        // Data fetching code goes here
        const fetchData = async () => {
            try {
                const response = await fetch('https://99-pro-server.vercel.app/beautyProducts');
                const data = await response.json();
                setAllProducts(data)
           
                // Update state or do something with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <h2 className = "my-4 text-center text-[#b84f77] text-2xl font-bold" >
                Shop beauty product  
            </h2>
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
        <div className="flex justify-center items-center">
        <Link to= {`/beautyProducts`}>
          <button 
          style={{boxShadow:"0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"}}
            className='flex text-[#EEF2F5] justify-center transition duration-200 ease-in-out transform px-6 py-2 w-30 border-b-4 border-[#df81a5]  bg-gradient-to-t from-[#cc5a86]  via-[#EA0F62] to-[#e2a1ba] rounded-2xl hover:translate-y-px '>
            See More
          </button>
        </Link>
        </div>
      
      </div>
        </div>
    );
};

export default BeautyProducts;