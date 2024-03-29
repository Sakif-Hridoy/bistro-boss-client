import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
              <div className='grid md:grid-cols-2 gap-4'>
            {
                items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <Link to={`/order/${title}`}><button className='btn btn-outline'>Order Now</button></Link>

        </div>
    );
};

MenuCategory.propTypes = {
    
};

export default MenuCategory;