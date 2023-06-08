
import { SiFacebook} from "react-icons/si";
import { AiOutlineTwitter} from "react-icons/ai";
const Footer = () => {
    return (
        <>
        <div className= "relative bg-[#82c1da] pt-8 pb-6" >
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-[#EA0F62]">Lets keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-[#fcfdfd]">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-2 lg:mb-0 mb-6 flex gap-2">
          <button className="flex bg-white hover:bg-[#d4a5b7] rounded-full p-2 justify-center items-center shadow-lg shadow-[#dbaabd]" >
            <SiFacebook className="flex justify-center text-[#3b5998]"></SiFacebook>
            </button > 
            <button className="flex bg-white hover:bg-[#d4afbd] rounded-full p-2 justify-center items-center shadow-lg shadow-[#dbaabd]" >
            <AiOutlineTwitter className="flex justify-center text-[#00acee]"></AiOutlineTwitter>
            </button > 
          
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm text-[#EA0F62] font-semibold mb-2">Useful Links</span>
            <ul className = "list-unstyled text-start " >
              <li>
                <a className="text-[#fcfdfd] hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">About Us</a>
              </li>
              <li>
                <a className="text-[#fcfdfd] hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Blog</a>
              </li>
              <li>
                <a className="text-[#fcfdfd] hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Free Products</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm text-[#EA0F62] font-semibold mb-2">Other Resources</span>
            <ul className = "list-unstyled text-start " >
              <li>
                <a className="text-[#fcfdfd] hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-[#fcfdfd] hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Privacy policy</a>
              </li>
              <li>
                <a className="text-[#fcfdfd] hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
         
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Footer;