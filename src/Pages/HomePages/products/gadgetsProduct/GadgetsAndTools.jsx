import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';

const GadgetsAndTools = () => {
       const [allGadgets, setAllGadgets] = useState([]);
    const [limit] = useState(4)
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
          <div>
            <h2 className = "my-4 text-center text-[#b84f77] text-2xl font-bold" >
                Shop Gadgets and kitchen tools product  
            </h2>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 lg:px-4 px-2">
            {allGadgets && 
                    allGadgets.slice(0, limit).map((product, key) => (
                       <ProductCard key={key} product={product}>

                       </ProductCard>
                         
                        
                    ))
                    }
        </div>
           <br></br>
            <div className="text-center py-6">
        {" "}
        <div className="flex justify-center items-center">
        <Link to={  `/gadgetsAndTools` } >
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

export default GadgetsAndTools;