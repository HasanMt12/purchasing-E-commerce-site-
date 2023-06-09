
const ProductCard = ({product}) => {
    const { photo, name, price} = product;
    return (
        <>
            <div 
            className= " my-2 mx-2  bg-white border-b shadow-md shadow-[#e9b0c6] rounded-lg border-[#e25a8e] relative block overflow-hidden" >
  <img
    src={photo}
    alt=""
    className="h-[50%] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[50%]"
  />

  <div className=" lg:px-6 px-2 py-2">
   

    <h3 className="  lg:text-lg text-[12px]  font-medium text-[#c73f8a]">{name}</h3>

    <p className="lg:mt-1.5 absolute lg:bottom-16 sm:bottom-8  lg:text-sm   text-[10px] text-gray-700"><span className="text-green-500 font-bold">{price}</span> BDT
    </p>

   
      <button
        className=" w-[80%] inset-x-0 absolute lg:bottom-5 bottom-2 mx-auto text-white rounded bg-[#be6bac] lg:p-2 p-[4px] lg:text-sm text-xs  font-medium transition hover:scale-105"
      >
        Add to Cart
      </button>
   
  </div>
</div>


        </>
    );
};

export default ProductCard;