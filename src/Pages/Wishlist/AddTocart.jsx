import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

import { FaShopify} from "react-icons/fa";
import { toast } from "react-hot-toast";
import Loader from "../../components/Shared/Loader";

const AddTocart = () => {
      const [openTab, setOpenTab] = useState(1);
      const [modalStatus, setModalStatus] = useState(false);
      const { user } = useContext(AuthContext);
      const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    fetch(`https://99-pro-server.vercel.app/cart?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
     setIsLoading(false)
  }, [user?.email]);

   const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const price = form.price.value;
    const TransId = form.TransId.value;
    const booking = {
      product: name,
      email,
      phone,
      location,
      price,
      TransId
    };
    // console.log(booking);
    fetch("https://99-pro-server.vercel.app/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };
    return (

        <>
        {isLoading? ( <Loader></Loader>):(
            <div className="w-11/12 mx-auto h-screen">
         <h2 className="text-center lg:text-4xl text-xl font-bold my-3">Featured Product</h2>
      <p className="w-2/3 mx-auto  mb-2 font-light text-slate-500 lg:mb-2 md:text-lg lg:text-xl text-slate-400 text-center">
        Your Cart
      </p>
      <div className="section">
        {data.map((product) => (
         

<>

  <li key={product._id} className="flex rounded-lg my-2 bg-pink-200/50 items-center p-6 mx-2 gap-4">
        <img
          src={product.photo}
          alt=""
          className="h-24 w-24 rounded object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">{product.name}</h3>

          <dl className="mt-0.5 space-y-px text-lg text-gray-600">
            <div>
              <dt className="inline text-md">{product.price}</dt>
            
            </div>

          </dl>
        </div>

        <div
         onClick={() => setModalStatus(true)}
        className="flex flex-1 items-center justify-end gap-2">
         <FaShopify className="text-xl text-blue-500/90"></FaShopify>
         

          <button className="text-red-500 text-xl transition hover:text-red-600">
            <span className="sr-only">Remove item</span>

            <svg
              xmlnsName="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </li>

 {modalStatus && (

        
        <div
        data={product}
          className="relative z-10"
          // aria-labelledby="modal-title"
          // role="dialog"
          // aria-modal="true"
        >
          <div data-aosName="zoom-in" className="  fixed inset-0 z-10 overflow-y-auto ">
           
            <div className = "flex  min-h-full items-end justify-center  text-center sm:items-center sm:p-0 " >
        <div className="w-[50%] mx-auto bg-gray-50 p-4">
          
            <button
                        className="p-2  flex justify-end bg-[#EA0F62]  right-1 transition duration-200 rounded hover:bg-[#c7497a] focus:bg-[#EA0F62] focus:outline-none focus:shadow-outline"
                       onClick={() => setModalStatus(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white  bg-pink-400/80"
                    : "text-white bg-gray-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Cash on deliver
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                     ? "text-white  bg-pink-400/80"
                    : "text-white bg-gray-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Bkash Payment
              </a>
            </li>
          </ul>
          <div className="relative flex h-[30rem] flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    

<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
   
   

      <div className="rounded-lg ">
        <form onSubmit= {handleBooking }
        className = "space-y-4" >
          <div>
         
            <input
              className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
                name="email"
                type="email"
                defaultValue={user.email}
                disabled
                placeholder="Your Email"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
             
              <input
                className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
               name="product"
                type="text"
                defaultValue={product.name}
                disabled
              />
            </div>
              <div>
              <input
                className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
               name="price"
                type="text"
                defaultValue={product.price}
                disabled
              />
            </div>
             <div>  
              <input
                className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
                name="phone"
                type="text"
                placeholder="Phone Number"
             
              />
            </div>

            <div>
             
              <input
                className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
                 name="location"
                type="location"
                placeholder="Location"
                required
              />
            </div>
          </div>
<input className="bg-pink-500/80 rounded p-2 text-white text-semibold w-full" type="submit" value="Submit" />
        

      

        
        </form>
      </div>

  </div>
</section>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
   
   

      <div className="rounded-lg ">
        <form onSubmit= {handleBooking }
        className = "space-y-4" >
          <div>
         
            <input
              className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
                name="email"
                type="email"
                defaultValue={user.email}
                disabled
                placeholder="Your Email"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
             
              <input
                className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
               name="product"
                type="text"
                defaultValue={product.name}
                disabled
              />
            </div>
              <div>
              <input
                className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
               name="price"
                type="text"
                defaultValue={product.price}
                disabled
              />
            </div>
             <div>
              <input
                className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
               name="TransId"
                type="text"
                placeholder="TransId"
              />
            </div>
             <div>  
              <input
                className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
                name="phone"
                type="number"
                placeholder="Phone Number"
             
              />
            </div>

            <div>
             
              <input
                className="w-full rounded-lg border-pink-500 border-b-3 p-3 text-sm"
                 name="location"
                type="location"
                placeholder="Location"
                required
              />
            </div>
          </div>
<input className="bg-pink-500/80 rounded p-2 text-white text-semibold w-full" type="submit" value="Submit" />
        

      

        
        </form>
      </div>

  </div>
</section>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      )}

</>
         
        ))}
      </div>
       
        </div> 
        )}
       
        </>
    );
};

export default AddTocart;