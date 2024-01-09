import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div className='flex space-x-4'>
            <img className='w-[120px]' src={image} alt="" />
            <div>
                <h3 className='uppercae'></h3>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    
};

export default MenuItem;