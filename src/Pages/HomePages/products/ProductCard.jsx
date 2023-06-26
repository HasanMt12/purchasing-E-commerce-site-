/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Authentication/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
const ProductCard = ({ product }) => {
  const { photo, name, price, verification ,  _id } = product;
  console.log(product);
 
  const [fill, setFill] = useState(false);

  const handleWishList = (product) => {
    const dbWishlist = { ...product };
    dbWishlist.email = user?.email;
    dbWishlist.color = "red";
    delete dbWishlist._id;

    fetch("https://99-pro-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dbWishlist),
    })
      .then((res) => res.json())
      .then((result) => {
        setFill(true);
        console.log(result);
        toast.success("added successfully");
      })
      .catch((err) => toast.error(err.message));
  };


    const {user} = useContext(AuthContext);
    const [ , refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = product => {
        // console.log(product);
        if(user && user.email){
            const product = {productId: _id, name, photo, price, email: user.email, verification}
            fetch('https://99-pro-server.vercel.app/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${name} on the cart.`,
                        showConfirmButton: false,
                        timer: 2500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
  // const handleAddtoCart = (product) => {
  //   const dbCart = { ...product };
  //   dbCart.email = user?.email;

  //   delete dbCart._id;

  //   fetch("https://99-pro-server.vercel.app/cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(dbCart),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       toast.success("cart added successfully");
  //     })
  //     .catch((err) => toast.error(err.message));
  // };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div className=" my-2 mx-2  bg-white border-b shadow-md shadow-[#e9b0c6] rounded-lg border-[#e25a8e] relative block overflow-hidden">
        <img
          data-aos="fade-down"
          src={photo}
          alt=""
          className="h-[50%] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[50%]"
        />

        <div className=" lg:px-6 px-2 pt-2">
          <div className="flex justify-between items-start">
            <h3
              // data-aos="fade-right"
              className="  lg:text-lg text-[12px]  font-medium text-[#c73f8a]"
            >
              {name}
            </h3>
            <button
              onClick={() => handleWishList(product)}
              className={"w-8 text-center mr-2 "}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={fill.color ? fill.color : "none"}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>

          <p
            // data-aos="fade-right"
            className="lg:mt-1 absolute lg:bottom-20 sm:bottom-8  lg:text-sm   text-[10px] text-gray-700"
          >
            <span className="text-blue-500 font-bold">৳ {price}</span> 

          </p>
          {verification && <h2>sold Out</h2>}

          <button
            onClick={() => handleAddToCart(product)}
            className=" w-[90%] inset-x-0 absolute lg:bottom-5 bottom-2 mx-auto text-white rounded bg-[#ee7da8] lg:p-2 p-[4px] lg:text-sm text-xs  font-medium transition hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
