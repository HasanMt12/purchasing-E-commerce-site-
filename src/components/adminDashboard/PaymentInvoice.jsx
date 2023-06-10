import { useQuery } from "@tanstack/react-query";


const PaymentInvoice = () => {
     const {data: payments = [] , refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async() =>{
            const res = await fetch('https://99-pro-server.vercel.app/payment');
            const data = await res.json();
            console.log(data);
            return data;
           
        }
    });

    return (
             <div >
            <h2 className="text-3xl  text-center font-sans">Payment products</h2>
      <div className="">
        
            {
              payments.map((payment, i) => (
                <div key = {
                  payment._id
                }
                className = "rounded-xl h-[10rem] w-10/12 mx-auto my-4 p-4 border-b-2 border-pink-500  bg-gray-50" >

    <h2>{payment.name}</h2>
 
    <div>
      <h3 className="font-medium  sm:text-lg text-2xl">
       
      Email: <span className="text-pink-600/70 font-medium  sm:text-sm text-lg">{payment.email}</span>
     
      </h3>

     <h2>Price: <span className="text-pink-600/70 font-medium  sm:text-sm text-lg">{payment.price}</span></h2>
 <h2> Number:<span className="text-pink-600/70 font-medium  sm:text-sm text-lg">{payment.phone}</span></h2>
  <h2> TransId:<span className="text-pink-600/70 font-medium  sm:text-sm text-lg">{payment.TransId}</span></h2>
  </div>
 
<div className="flex justify-end">
    {payment?.verification !== "deliver" ? (
                       <strong onClick = {
                           () => handleMakedeliver(produc._id)
                       }
      className="-mb-[2px] cursor-pointer -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-pink-600 px-3 py-1.5 text-white"
    >


      <span className="text-[10px] font-medium sm:text-xs">Make a Deliver </span>
    </strong>
                    ) : (
                       <strong
      className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
    >
       <svg
        xmlnsName="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg> 

      <span className="text-[10px] font-medium sm:text-xs">Deliver</span>
    </strong>
                    )}
  </div> 

  
                  
</div>
              
            ))}
         
      </div>
        </div>
    );
};

export default PaymentInvoice;