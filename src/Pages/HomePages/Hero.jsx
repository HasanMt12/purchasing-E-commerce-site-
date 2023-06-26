import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/pagination";
import {  Autoplay ,  A11y, Pagination } from "swiper";
import 'swiper/css/scrollbar';
// Import Swiper React components
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';

import logo3 from '../../assets/3.png'
import logo4 from '../../assets/4.png'
import './HomePage.css'
const Hero = () => {
    return (
        <div className="">
           <Swiper className='lg:w-[80%] md:w-[90%] sm:w-[85%]  mx-auto'
          slidesPerview={1}
          pagination={{
          clickable: true,
           
        }}
            modules={[Pagination, Autoplay, A11y,]}
           loop={true}
            autoplay={{ delay: 4000,}}
          >
          
            <SwiperSlide  className='my-1 lg:my-2'> 
                    <img src='https://i.ibb.co/zHCYz4M/1.png' className=" " />
              </SwiperSlide>
            <SwiperSlide  className='my-1 lg:my-2'> 
                    <img src='https://i.ibb.co/bgqQCjY/i.jpg' className=" " />
              </SwiperSlide>
              <SwiperSlide  className='my-1 lg:my-2'> 
                    <img src={logo3} className=" " />
              </SwiperSlide>
              <SwiperSlide  className='my-1 lg:my-2'> 
                    <img src={logo4} className=" " />
              </SwiperSlide>
           
              

                
          </Swiper>
        </div>
    );
};

export default Hero;