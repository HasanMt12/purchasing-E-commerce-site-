
const ProductCard = ({product}) => {
    const { photo, name, price} = product;
    return (
        <>
            <a href="#"
            className= "group lg:w-[90%] bg-white border-b shadow-md shadow-[#e9b0c6] rounded-lg border-[#e25a8e] relative block overflow-hidden" >
  <button
    className="absolute end-4 top-4 z-10 rounded-full bg-[#ca6e92] p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

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
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src={photo}
    alt=""
    className="h-[50%] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[50%]"
  />

  <div className=" p-6">
    {/* <span
      className="whitespace-nowrap bg-[#82c1da] px-3 py-1.5 text-xs font-medium"
    >
      New
    </span> */}

    <h3 className="lg:mt-2 mt-1 lg:text-lg text-[12px] font-medium text-[#c73f8a]">{name}</h3>

    <p className="lg:mt-1.5  absolute bottom-5 lg:bottom-10 mt-0.5 lg:text-sm mb-2 tex-[8px] text-gray-700">{price} BDT</p>

    <form className = " absolute inset-x-2 bottom-0 mt-2" >
      <button
        className="block w-full rounded bg-[#82c1da] lg:p-2 p-1 text-sm font-medium transition hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
  </div>
</a>
        </>
    );
};

export default ProductCard;