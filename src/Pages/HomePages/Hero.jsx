import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/pagination";
import {  Autoplay ,  A11y, Pagination } from "swiper";
import 'swiper/css/scrollbar';
// Import Swiper React components
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import logo1 from '../../assets/1.png'
import logo2 from '../../assets/2.png'
import logo3 from '../../assets/3.png'
import logo4 from '../../assets/4.png'
import './HomePage.css'
const Hero = () => {
    return (
        <div className="">
           <Swiper className='lg:w-[60%] md:w-[75%] sm:w-[85%]  mx-auto'
          slidesPerview={1}
          pagination={{
          clickable: true,
           
        }}
            modules={[Pagination, Autoplay, A11y,]}
           loop={true}
            autoplay={{ delay: 4000,}}
          >
          
            <SwiperSlide  className='my-2 lg:my-4'> 
                    <img src={logo1} className=" " />
              </SwiperSlide>
            <SwiperSlide  className='my-2 lg:my-4'> 
                    <img src={logo2} className=" " />
              </SwiperSlide>
              <SwiperSlide  className='my-2 lg:my-4'> 
                    <img src={logo3} className=" " />
              </SwiperSlide>
              <SwiperSlide  className='my-2 lg:my-4'> 
                    <img src={logo4} className=" " />
              </SwiperSlide>
           
              

                
          </Swiper>
        </div>
    );
};

export default Hero;