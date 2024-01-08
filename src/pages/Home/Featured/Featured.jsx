import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = props => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className='md:flex justify-center items-center py-8 px-16'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-20'>
                    <p>Aug 20,2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque minima officiis facere animi alias et suscipit dignissimos? Corporis dicta repudiandae provident repellat itaque cupiditate, eligendi veritatis, consequuntur ut iusto quasi accusamus fuga, adipisci alias vitae rerum? Quas, perspiciatis, autem optio id, debitis totam ab temporibus reprehenderit esse illum aliquid?</p>
                    <button className='btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

Featured.propTypes = {
    
};

export default Featured;