import React from 'react'
import './SwiperCSS.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperSlider() {
  return (
    <>
    <div className='container1'>
      <div className='swiper'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      hidden
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='Image'>
        <img src='https://assets.tractorjunction.com/tractor-junction/assets/images/upload/mahindra-arjun-novo-605-dii-4wd-1698917936.webp?format=webp'/>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='Image'>
        <img src='https://www.deere.co.in/assets/images/region-1/products/tractors/tractor-3d-experience-banner.jpg'/>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='Image'>
        <img src='https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/06/full/1691343911-1575.jpg?im=FitAndFill=(826,465)'/>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='Image'>
        <img src='https://assets.tractorjunction.com/tractor-junction/assets/images/upload/mahindra-arjun-novo-605-dii-4wd-1698917936.webp?format=webp'/>
        </div>
        </SwiperSlide>
    </Swiper>
    </div>
    </div>
        </>
  )
}
export default SwiperSlider