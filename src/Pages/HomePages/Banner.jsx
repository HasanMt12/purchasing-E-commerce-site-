import banner from "/logo52.svg";
import { BsFacebook } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="relative z-1">
      <div className="absolute z-2 top-2 left-80 text-white font-semibold text-lg flex justify-center items-center">
        <a target="blank" href="https://www.facebook.com/99ProShopBD/">Connect with us on FaceBook Page</a>
        <a target="blank" href="https://www.facebook.com/99ProShopBD/"><BsFacebook className="text-blue-500 ml-3"></BsFacebook></a>
      </div>
      <img className="w-full " src={banner}></img>
    </div>
  );
};

export default Banner;
