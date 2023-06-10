import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import ProductCard from "../HomePages/products/ProductCard";
import Loader from "../../components/Shared/Loader";


const Wishlist = () => {
     const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
   setIsLoading(true)
    fetch(`https://99-pro-server.vercel.app/wishlist?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
       setIsLoading(false)
  }, [user?.email]);
    return (
      <> {
        isLoading? (<Loader></Loader>):(
          <div className="w-11/12 mx-auto">
         <h2 className="text-center lg:text-4xl text-xl font-bold my-3">Favorite Product</h2>
      <p className="w-2/3 mx-auto  mb-2 font-light text-slate-500 lg:mb-2 md:text-lg lg:text-xl text-slate-400 text-center">
        Your Wishlist
      </p>
      <div className="section">
        {data.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
        </div>
        )
      }
        
        </>
    );
};

export default Wishlist;