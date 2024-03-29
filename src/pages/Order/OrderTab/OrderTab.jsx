import React from 'react';
import PropTypes from 'prop-types';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    console.log(items)

    return (
        <div className="grid md:grid-cols-3 gap-10">
        {
            items.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
        }
        </div>
    );
};

OrderTab.propTypes = {
    
};

export default OrderTab;