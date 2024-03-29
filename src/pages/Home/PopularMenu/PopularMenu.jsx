import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = props => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular')
    // const [menu,setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item=>item.category === ('popular','salad'))
    //         setMenu(popularItems)})
    // },[])
    return (
        <div className='grid md:grid-cols-2 gap-4'>
            {
                popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    );
};

PopularMenu.propTypes = {
    
};

export default PopularMenu;