import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const Testimonials = props => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div>
            <SectionTitle 
            subHeading="What Our Client Say"
            heading="Testimonials"></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     {
        reviews.map(review=>   <SwiperSlide key={review._id} review={review}>
            
            <div className='m-24 flex flex-col items-center'>
            <Rating style={{ maxWidth: 180}} value={review.rating} readOnly />
                <p>{review.details}</p>
                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
            </div>
            
            </SwiperSlide>)
     }
        
      </Swiper>
        </div>
    );
};

Testimonials.propTypes = {
    
};

export default Testimonials;