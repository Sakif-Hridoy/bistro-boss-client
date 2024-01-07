import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = props => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;