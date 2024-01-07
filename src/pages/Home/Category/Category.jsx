import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {FreeMode, Pagination } from 'swiper/modules';

import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = props => {
    return (
        <section>
          <SectionTitle heading={"from 11.00am to 10.00pm"}></SectionTitle>
          <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        // autoplay
        modules={[FreeMode,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        
      </Swiper>
        </section>
    );
};

Category.propTypes = {
    
};

export default Category;